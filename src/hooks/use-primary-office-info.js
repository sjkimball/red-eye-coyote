import { graphql, useStaticQuery } from 'gatsby';

const usePrimaryOfficeInfo = () => {
		const data = useStaticQuery(graphql`
			{
			  sanityOffice(address: {city: {eq: "Chicago"}}){
			    address {
			      city
			      state_province
			      country
			    }
			    links {
			    	_key
			      service {
			        name
			      }
			      username
			      url
			    }
			  }
			}
		`)
	return data.sanityOffice;
};

export default usePrimaryOfficeInfo;
