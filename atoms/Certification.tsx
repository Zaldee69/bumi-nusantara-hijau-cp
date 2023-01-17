import React from 'react'

interface Props {
    title: string
    subtitle1: string
    subtitle2?: string
}

const CertificationTypography = ({title, subtitle1, subtitle2}: Props) => {
  return (
    <div>
        <h3 className="font-semibold text-secondary" >{title}</h3>
        <p>{subtitle1}</p>
        <p>{subtitle2}</p>
    </div>
  )
}

export default CertificationTypography
