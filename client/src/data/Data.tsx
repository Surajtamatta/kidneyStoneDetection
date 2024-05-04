



export interface Data {
    id: number;
    testName: string;
    labName: string;
    price:string
    url: string;
    img: string;
    address:string;
    description:string;
}

export const CardData: Data[] = [
  {
    id: 1,
    url: "#",
    testName: "Kidney Stone Detection",
    labName: "Medical Lab",
    price: "$150.50",
    img: "/image/cardsImg.jpg",
    address: "0912 Won Street, Alabama, SY 10001",
    description:"Chronic kidney stone detection (CKD), also known as chronic renal disease. Chronic kidney stone detection involves conditions that damage your kidneys and decrease their ability to keep you healthy. The objective of this research work is to introduce a new  system to predict chronic kidney stone detection using modern algorith of machine learning and deep learning. ",
  },

];


