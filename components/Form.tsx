import React from 'react'

const Form = () => {
  return (
    <form className="form-control flex flex-col items-center gap-5 bg-primary py-12 px-10 mt-10 ">
            <input type="text" placeholder="Nama" className="input w-full max-w-md" />
            <input type="text" placeholder="Perusahaan / Bidang" className="input w-full max-w-md" />
            <input type="number" placeholder="No.Telp" className="input w-full max-w-md" />
            <input type="text" placeholder="Lokasi Bangunan" className="input w-full max-w-md" />
            <textarea className="textarea w-full max-w-md" placeholder="Pesan"></textarea>
            <button type="button" className="input w-full max-w-md bg-secondary text-white" >Kirim</button>
        </form>
  )
}

export default Form