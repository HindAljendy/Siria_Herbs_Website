
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

interface Story {
    id: number;
    description: string;
    file: string;
  }

  export type NavButtonsBarProps ={
    categories:string[]
  }

