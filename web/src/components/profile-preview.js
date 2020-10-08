import React from 'react'

import {Link} from 'gatsby'

import PreviewImage from '../components/preview-image'

import './preview.css'

const ProfilePreview = ({profile}) => {
  const {profileImg, name, office, slug} = profile
  const profileSlug = slug.current
  const officeName = office.contactInfo.address.city
  return (
    <Link to={`/about/${profileSlug}`} className={`preview preview--dark`}>
      <h4>{name}</h4>
      <h5>{officeName}</h5>
      <PreviewImage imageAsset={profileImg} imageType={`square`} />
    </Link>
  )
}

export default ProfilePreview
