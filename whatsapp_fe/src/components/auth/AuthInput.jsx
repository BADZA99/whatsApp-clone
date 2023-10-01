

export default function AuthInput({
  name,
  type,
  placeholder,
  register,
  errors,
}) {
  return (
    <div className="mt-8 content-center dark:text-dark_text_1 space-y-1">
      <label htmlFor={name} className="text-sm font-bold tracking-wide">{placeholder}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full text-base py-2 px-4 outline-none rounded-lg border-b dark:bg-dark_bg_3"
      />
      {errors && <p className="text-red-400">{errors}</p>}

    </div>
  )
}
