import { groq } from "next-sanity";
import sanityClient from "./sanityClient";
import IKreation from "@/types/IKreation";

const getKreations = async (): Promise<IKreation[]> => {
  try {
    // Fetch the StudentReviews using the defined query
    const kreations = await sanityClient.fetch(
      groq`*[ _type == 'kreation' ] {
        _id,
        _createdAt,
        name,
        description,
        brief,
        icon {
          asset -> {
            url
          },
          width,
          height,
          shadow
        },
        logo {
          asset -> {
            url
          }  
        },
        images[] {
          asset -> {
            url
          }
        },
        status,
        tags,
        url,
        founding_year,
        email
      }`
    );
    return kreations;
  } catch (error) {
    console.error('Error fetching kreations:', error);
    return [];
  }
};

export default getKreations;
