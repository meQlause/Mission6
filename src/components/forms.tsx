import type { FormProps } from "../utils/interfaces";
import type { LoginFormValues, Props, RegisterFormValues, Variant } from "../utils/types";
import { ButtonUI } from "./UIs/button";
import { EmailInput, PasswordInput, PhoneInput, TextInput } from "./UIs/input";
import { useForm } from "react-hook-form";

export const FormComponent = ({
  className = "",
  onSubmit,
  variant = "login",
  ...props
}: Props & FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Variant extends "login" ? LoginFormValues : RegisterFormValues>();

  const isRegister = variant === "register";

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit?.(data))}
      className={`flex flex-col gap-3 ${className}`}
      {...props}
    >
      {isRegister && (
        <>
          <TextInput
            label="Nama Lengkap"
            className="w-full"
            registration={register("name")}
            error={errors?.name?.message}
          />
        </>
      )}

      <EmailInput
        label="Email"
        className="w-full"
        registration={register("email")}
        error={errors?.email?.message}
      />

      {isRegister && (
        <PhoneInput
          label="Nomor Telepon"
          className="w-full"
          registration={register("phone")}
          error={errors?.phone?.message}
        />
      )}

      <PasswordInput
        label="Password"
        className="w-full"
        registration={register("password")}
        error={errors?.password?.message}
      />

      {isRegister && (
        <PasswordInput
          label="Konfirmasi Password"
          className="w-full"
          registration={register("passwordConfirmation")}
          error={errors?.passwordConfirmation?.message}
        />
      )}

      {!isRegister && (
        <div className="flex justify-end">
          <a className="font-sans text-bodySmall text-[#4A505C]" href="#">
            Lupa password?
          </a>
        </div>
      )}
      <div className="mt-3">
        <ButtonUI variant="primary" type="submit">
          {isRegister ? "Daftar" : "Masuk"}
        </ButtonUI>
      </div>
    </form>
  );
};
