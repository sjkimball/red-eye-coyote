import React from 'react'

import {Link} from 'gatsby'

import PreviewImage from '../components/preview-image'

import './profile-preview.css'

const ProfilePreview = ({profile}) => {
  const {profileImg, firstName, lastName, office, slug} = profile
  const name = `${firstName} ${lastName}`
  const profileSlug = slug.current
  const officeName = office.contactInfo.address.city

  return (
    <Link to={`/about/${profileSlug}`} className={`profile-preview`}>
      <PreviewImage imageAsset={profileImg} profilePic />
      <h3 className={`profile-name`}>{name}</h3>
      <p>{officeName}</p>
    </Link>
  )
}

export default ProfilePreview
