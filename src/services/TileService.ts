
import { IPromotedLinkItemProps } from '../webparts/spfxPromotedLinks/components/SpfxPromotedLinkItem';

// randomItem = samplePics[Math.floor(Math.random()*samplePics.length)];
export const samplePics = [
    "https://amp.businessinsider.com/images/5698198de6183e50008b98a1-1334-1001.jpg",
    "https://www.charlottefive.com/wp-content/uploads/2018/10/Signature-Shot-Pavilion-Pool-and-Beach.jpg",
    "https://www.xtns.org/wp-content/uploads/2014/06/all-inclusive-resorts-island-resort-exquisite-us-virgin-islands-all-inclusive-resorts-deals-us-virgin-islands-resorts-st-croix-us-virgin-islands-resorts-st-johns-us-virgin-islands-resorts-st-thom.jpg",
    "https://i.kinja-img.com/gawker-media/image/upload/qjmdguwovtcsjszqqgqt.jpg",
    "https://i.pinimg.com/474x/d1/93/2a/d1932afb0987d71a61b2bf7df8735cd4.jpg",
    "https://i.pinimg.com/474x/95/1c/c3/951cc398063945df92d7d0258e3db5a3.jpg"
  ]
  // randomItem = sampleCats[Math.floor(Math.random()*sampleCats.length)];
  export const sampleCats = [
    "People",
    "Places",
    "Things"
  ]
  // randomItem = sampleLinks[Math.floor(Math.random()*sampleLinks.length)];
  export const sampleLinks = [
    "https://www.google.com",
    "https://www.bing.com",
    "https://www.microsoft.com",
    "https://www.cnn.com",
    "https://www.amazon.com"
  ]
  
  // https://css-tricks.com/snippets/javascript/select-random-item-array/
  // randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  
  export const pivtTitles = [
    "People",
    "Places",
    "Things"
  ];

  export class TileService {
  
    public static getAllTiles(): IPromotedLinkItemProps[] {

        let allTiles = [];

        var i:number
        for(i = 0;i<=10;i++) {

          let newTile = {} as IPromotedLinkItemProps;

          newTile.category = pivtTitles[Math.floor(Math.random()*pivtTitles.length)];
          newTile.imageUrl = samplePics[Math.floor(Math.random()*samplePics.length)];
          newTile.title = newTile.category + " " + Math.floor(Math.random() * 100);
          newTile.description = "Description " + Math.floor(Math.random() * 10000) + " --- " + newTile.category;
          newTile.href = sampleLinks[Math.floor(Math.random()*sampleLinks.length)];
  
          allTiles = allTiles.concat(newTile);

       }

       console.log("These are the expected tiles found in TileService\getAllTiles.ts");
       console.log(allTiles);
        return allTiles;
        
        /*

        // Why does this NOT work instead???      return <PromotedLinkItem newTile />

        return <PromotedLinkItem
        imageUrl={newTile.imageUrl}
        title={newTile.title}
        description={newTile.description}
        href={newTile.href}
        category={newTile.category} />
        */
    }
  }