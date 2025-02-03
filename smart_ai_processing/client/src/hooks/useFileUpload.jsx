import { useState } from "react";
import toast from "react-hot-toast";

export const useFileUpload = (
  setFieldValue,
  formValues,
  upload = null,
  size = 1000000, // Ukuran maksimum dalam byte (default: 1MB)
  maxFiles = 5
) => {
  const [preview, setPreview] = useState([]);

  // Validasi ukuran file
  const isValidFile = (file) => {
    if (file.size > size) {
      toast.error(
        `File size exceeds the maximum limit of ${size / 1000000} MB`
      );
      return false;
    }
    return true;
  };

  // Update nilai form dan panggil callback upload jika ada
  const updateForm = (name, files) => {
    setFieldValue(name, files);
    const updatedFormData = {
      ...formValues,
      [name]: files,
    };
    if (upload) upload(updatedFormData);
  };

  // Fungsi utama yang menangani perubahan file
  const handleFileChange = (e, isSingle = false) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      if (isSingle) {
        // Upload tunggal: ambil file pertama saja
        const file = files[0];
        if (isValidFile(file)) {
          setFieldValue(name, file);
          setPreview([{ file, url: URL.createObjectURL(file) }]);
          const updatedFormData = { ...formValues, [name]: file };
          if (upload) upload(updatedFormData);
        }
      } else {
        // Upload berganda: cek jumlah file yang sudah ada
        if (preview.length + files.length > maxFiles) {
          toast.error(`You can only upload up to ${maxFiles} files.`);
          return;
        }
        const validFiles = Array.from(files).filter(isValidFile);
        if (validFiles.length > 0) {
          updateForm(name, validFiles);
          setPreview((prev) => [
            ...prev,
            ...validFiles.map((file) => ({
              file,
              url: URL.createObjectURL(file),
            })),
          ]);
        }
      }
      // Reset nilai input agar file yang sama bisa diupload kembali jika diperlukan
      e.target.value = "";
    }
  };

  // Fungsi yang akan dipanggil untuk singleUpload (gambar atau PDF)
  const singleUpload = (e) => handleFileChange(e, true);
  // Fungsi yang akan dipanggil untuk multiUpload (gambar atau PDF)
  const multiUpload = (e) => handleFileChange(e, false);

  // Fungsi untuk menghapus preview (misalnya jika user ingin menghapus file yang telah dipilih)
  const removePreview = () => {
    setPreview((prevPreview) => {
      const newPreview = [...prevPreview];
      const updatedFiles = newPreview.map((item) => item.file);
      setFieldValue("files", updatedFiles);
      const updatedFormData = { ...formValues, files: updatedFiles };
      if (upload) upload(updatedFormData);
      return newPreview;
    });
  };

  // Handle drag and drop (menggunakan fungsi multiUpload)
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Jika menggunakan drag-drop, langsung proses file-nya sebagai multi upload
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      // Membuat objek mirip event agar bisa digunakan handleFileChange
      const fakeEvent = {
        target: { name: "files", files: e.dataTransfer.files, value: "" },
      };
      handleFileChange(fakeEvent, false);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  return {
    preview,
    setPreview,
    handleDrop,
    multiUpload,
    singleUpload,
    handleDragOver,
    removePreview,
  };
};
