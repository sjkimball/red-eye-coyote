import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Profile from '../components/profile';

const ProfileTemplate = ({ data }) => {
	const profile = data.profile;
	const relatedProjects = data.relatedProjects.edges

	return (
		<Layout>
			<Profile profile={profile} relatedProjects={relatedProjects} />
		</Layout>
	);
};

export const query = graphql`
	query ($slug: String!) {
	  profile: sanityPerson(slug: {current: {eq: $slug}}) {
	    profileImg {
				...imageData
	    }
	    name
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
		relatedProjects: allSanityProject(filter: {projectMembers: {elemMatch: {person: {slug: {current: {eq: $slug}}}}}}) {
			edges {
				node {
					id
					client {
						name
						slug {
							current
						}
					}
					coverImg {
						...imageData
					}
					slug {
						current
					}
				}
			}
		}
  }
`;

export default ProfileTemplate;
