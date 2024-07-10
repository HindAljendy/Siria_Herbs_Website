
export interface SectionHeaderProps {
    title:string,
    directionclass:string
}

export interface ContactSocialProps {
    icon:string|undefined,
    title:string|undefined,
    details?:string|undefined,
    Link?:string|undefined
}

export type TContactSocialMediaData = {
    data: any;
    id:string ,
    email:string,
    phone_number:string,
    adresses:string,
    facebook_link:string,
    instegram_link:string,
    whatsApp_number:string,
    twitter_link:string,
    linkedin_link:string,
    youtube_link:string

}
export interface NavigationLinksProps {
  navigateMain: string;
  navigateLink: string;
  navigateSubmain: string;
  navigateSubmain2:string;

}

export interface BigNavigationLinksProps {
  navigateMain: string;
  navigateLinkMain: string;
  navigateLinkSubmain: string;
  navigateSubmain: string;
}


interface Story {
    id: number;
    description: string;
    file: string;
  }

  export type ProductsProps ={
    brand_id:number,
    brandColor:string

  }
export type TProduct ={
  main_image?:string,
  name?:string,
  color?:string
}

export type TBrand ={
  brandId:number,
  brand_color?:string
}