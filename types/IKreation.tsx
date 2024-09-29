export default interface IKreation {
  _id: string;
  _createdAt: string;
  name: string;
  description: string;
  brief: string;
  logo: {
    asset: {
      url: string;
    };
  };
  images: {
    asset: {
      url: string;
    };
  }[];
  icon: {
    asset: {
      url: string;
    };
    width: string;
    height: string;
    shadow: string;
  };
  status: string;
  tags: string[];
  url: string;
  founding_year: number;
  email: string;
}
