import React, {useState} from "react";
import emailjs from '@emailjs/browser';

interface IForm {
  name: string
  phone: string | undefined
  company: string
  project: string
  message: string
}

// template_vh73g0u

const Form = () => {

  const [form, setForm] = useState<IForm>({
    name: "",
    phone: undefined,
    company: "",
    project: "",
    message: ""
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target as typeof e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    emailjs.send("service_0ipont3", "template_vh73g0u", form as any , "0U5Va30ezqFBsyZp2" ).then((res) => {
      setForm({
        name: "",
        phone: undefined,
        company: "",
        project: "",
        message: ""
      })
    }).catch((err) => console.log(err))
  }

  return (
    <form onSubmit={onSubmitHandler} className="form-control flex flex-col items-center gap-5 bg-primary py-12 px-10 mt-10 ">
      <input value={form.name} type="text" name="name" onChange={onChangeHandler} placeholder="Nama" className="input w-full max-w-md" />
      <input
        name="company"
        onChange={onChangeHandler}
        type="text"
        placeholder="Perusahaan / Bidang"
        className="input w-full max-w-md"
        value={form.company}
        autoComplete="off"
      />
      <input
        name="phone"
        onChange={onChangeHandler}
        type="number"
        placeholder="No.Telp"
        className="input w-full max-w-md"
        value={form.phone}
        autoComplete="off"
      />
      <input
        type="text"
        name="project"
        onChange={onChangeHandler}
        placeholder="Lingkup Project"
        className="input w-full max-w-md"
        value={form.project}
        autoComplete="off"
      />
      <textarea
        className="textarea w-full max-w-md"
        placeholder="Pesan"
        name="message"
        onChange={onChangeHandler}
        value={form.message}
        autoComplete="off"
      ></textarea>
      <button
        type="submit"
        className="input w-full max-w-md bg-secondary text-white"
      >
        Kirim
      </button>
    </form>
  );
};

export default Form;
