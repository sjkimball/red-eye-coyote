import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProfilePreview from '../components/profile-preview'

import useProfileBasics from "../hooks/use-profile-basics"

const AboutPage = ({data}) => {
	const profileData = useProfileBasics();
	const profiles = profileData.edges;

	return (
		<Layout page={`about`}>
			<SEO title="About" />
			<header className={`page-header page-header--dark`}>
			  <h1>About Red Eye Coyote</h1>
			  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nulla animi, consectetur cumque quas neque iste. Delectus tempora voluptatem quasi quae, eum sapiente perspiciatis, dolorem inventore et amet laboriosam eveniet!
			  </p>
			  <p>Voluptatibus voluptate ad, sit enim quisquam! Odit blanditiis praesentium animi, voluptatum aspernatur repellendus? Vitae animi autem cupiditate mollitia esse praesentium, corporis magni, maiores earum modi iusto excepturi labore! Reprehenderit, aut!
			  </p>
			  <p>Omnis consequatur autem nostrum voluptatibus earum aspernatur facere laborum ullam iure alias adipisci eligendi saepe est esse assumenda, et veritatis vero molestias magni ad explicabo mollitia pariatur dolor a quam.
			  </p>
			</header>
			{profiles.map(({ node: profile }) => {
			  const name = `${profile.first_name} ${profile.last_name}`;
			  const officeName = profile.office.contact_info.address.city;
			  const profileID = profile._id;
			  const profileImg = profile.profileImg;
			  const profileSlug = profile.slug.current;

			  return (
					<ProfilePreview
						key={profileID}
						name={name}
						officeName={officeName}
						profileImg={profileImg}
						profileSlug={profileSlug}
					/>
				);
			})}
		</Layout>
	)
}

export default AboutPage;
