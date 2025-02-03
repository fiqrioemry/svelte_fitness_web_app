/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function InputForm({ formControl, formik, formStyle, inputStyle, children }) {
  function renderComponentByType(control) {
    let element = null;

    switch (control.component) {
      case "input":
        element = (
          <>
            <div className="mb-4">
              <div className="flex items-center space-x-2 h-5">
                <Label
                  htmlFor={control.label}
                  className="block text-sm font-medium text-gray-700"
                >
                  {control.label}
                </Label>
                {formik.touched[control.name] &&
                  formik.errors[control.name] && (
                    <p className="text-red-500 text-sm">
                      {formik.errors[control.name]}
                    </p>
                  )}
              </div>

              <Input
                id={control.label}
                name={control.name}
                type={control.type}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder={control.placeholder}
                value={formik.values[control.name]}
                className="mt-1 block w-full"
              />
            </div>
          </>
        );
        break;

      case "select":
        element = (
          <div className="flex flex-col space-y-1 mb-4">
            <div className="flex items-center space-x-2 h-5">
              <Label
                htmlFor={control.label}
                className="block text-sm font-medium text-gray-700"
              >
                {control.label}
              </Label>
              {formik.touched[control.name] && formik.errors[control.name] && (
                <p className="text-red-500 text-sm">
                  {formik.errors[control.name]}
                </p>
              )}
            </div>
            <select
              id={control.label}
              name={control.name}
              type={control.type}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder={control.placeholder}
              value={formik.values[control.name]}
              className="rounded-md border border-input px-3 py-2 text-sm"
            >
              <option value="" disabled>
                {control.placeholder}
              </option>
              {control.options.map((option) => (
                <option value={option?.id || option} key={option?.id || option}>
                  {option?.name || option}
                </option>
              ))}
            </select>
          </div>
        );
        break;

      case "filter":
        element = (
          <select
            id={control.label}
            name={control.name}
            type={control.type}
            onBlur={formik.handleBlur}
            placeholder={control.placeholder}
            onChange={formik.handleChange}
            value={formik.values[control.name]}
            className="rounded-md border border-input px-3 py-2 text-sm w-full"
          >
            <option value="" disabled>
              {control.placeholder}
            </option>
            {control.options.map((option) => (
              <option value={option?.id || option} key={option?.id || option}>
                {option?.name || option}
              </option>
            ))}
          </select>
        );
        break;
      case "textarea":
        element = (
          <div className="mb-4">
            <Label htmlFor={control.name}>{control.label}</Label>
            <Textarea
              id={control.name}
              name={control.name}
              onChange={formik.handleChange}
              value={formik.values[control.name]}
              placeholder={control.placeholder}
              maxLength="400"
              className="resize-none h-60"
            />
          </div>
        );
        break;
      case "date":
        element = (
          <div className="mb-4">
            <Label
              htmlFor={control.label}
              className="block text-sm font-medium text-gray-700"
            >
              {control.label}
            </Label>
            <Input
              id={control.label}
              name={control.name}
              type="date"
              onBlur={formik.handleBlur}
              onChange={(e) => {
                formik.setFieldValue(control.name, e.target.value);
              }}
              placeholder={control.placeholder}
              value={
                formik.values[control.name]
                  ? format(new Date(formik.values[control.name]), "yyyy-MM-dd")
                  : ""
              }
              className="mt-1 block w-full"
            />
            {formik.touched[control.name] && formik.errors[control.name] && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors[control.name]}
              </p>
            )}
          </div>
        );
        break;
      default:
        element = (
          <div className="mb-4">
            <Label
              htmlFor={control.label}
              className="block text-sm font-medium text-gray-700"
            >
              {control.label}
            </Label>
            <Input
              id={control.label}
              name={control.name}
              type={control.type}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder={control.placeholder}
              value={formik.values[control.name]}
              className="mt-1 block w-full"
            />
            {formik.touched[control.name] && formik.errors[control.name] && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors[control.name]}
              </p>
            )}
          </div>
        );
        break;
    }

    return element;
  }

  return (
    <form onSubmit={formik.handleSubmit} className={formStyle}>
      {formControl.map((control) => (
        <div key={control.name} className={inputStyle}>
          {renderComponentByType(control)}
        </div>
      ))}
      <div>{children}</div>
    </form>
  );
}

export default InputForm;
