import { graphql, useStaticQuery } from 'gatsby';

const usePrimaryOfficeInfo = () => {
		const data = useStaticQuery(graphql`
			{
			  sanityOffice(contact_info: {address: {city: {eq: "Chicago"}}}){
			    contact_info {
			    	address {
				      city
				      state_province
				      country
			      }
			    }
			  }
			}
		`)
	return data.sanityOffice;
};

export default usePrimaryOfficeInfo;
