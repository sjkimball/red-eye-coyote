import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Profile from '../components/profile';

const ProfileTemplate = ({ data }) => {
	const profile = data.sanityPerson;

	const profileImg = profile.profileImg;
	const profileName = `${profile.firstName} ${profile.lastName}`;
	const office = profile.office.contactInfo.address.city
	const bio = profile._rawBio;

	return (
		<Layout>
			<Profile
				bio={bio}
				office={office}
				profileImg={profileImg}
				profileName={profileName}
			/>
		</Layout>
	);
};

export const query = graphql`
	query ($slug: String!) {
	  sanityPerson(slug: {current: {eq: $slug}}) {
	    profileImg {
	    	image {
	    		...postImageData
	    	}
	    }
	    firstName
	    lastName
	    office {
	    	contactInfo {
	    		address {
	    			city
	    		}
	    	}
	    }
	    _rawBio
	    _id
		}
  }
	fragment profileImageData on SanityImage {
		asset {
		  _id
		}
		hotspot {
		  x
		  y
		  height
		  width
		}
		crop {
		  top
		  bottom
		  left
		  right
		}
	}
`;

export default ProfileTemplate;
