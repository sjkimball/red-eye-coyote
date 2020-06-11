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
      <p>{officeName}</p>
      <PreviewImage imageAsset={profileImg} profilePic />
    </Link>
  )
}

export default ProfilePreview
