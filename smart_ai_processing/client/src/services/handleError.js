const handleError = (error) => {
  if (error.response) {
    throw new Error(error.response.data || "Terjadi kesalahan pada server");
  } else if (error.request) {
    throw new Error("Tidak dapat terhubung ke server. Coba lagi nanti.");
  } else {
    throw new Error(
      error.response.data || "Terjadi kesalahan yang tidak diketahui"
    );
  }
};

export default handleError;
