interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '拥抱孤独',
  siteUrl: 'https://running-page-swart.vercel.app/',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: '人毕竟无法与别人共享速度与节奏，这一切只属于自己。',
  navLinks: [

  ],
};

export default data;
