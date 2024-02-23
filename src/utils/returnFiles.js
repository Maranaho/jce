import movies from "../data/movies.json"

//Videos
import syrensofthedeep from "../assets/videos/syrensofthedeep.mp4"
import boyznthehood from "../assets/videos/boyznthehood.mp4"
import thecircle from "../assets/videos/thecircle.mp4"
import ghostintheshell from "../assets/videos/ghostintheshell.mp4"
import looper from "../assets/videos/looper.mp4"
import spiderman from "../assets/videos/spiderman.mp4"
import strangerthings from "../assets/videos/strangerthings.mp4"
import justiceleague from "../assets/videos/justiceleague.mp4"
import lockeandkey from "../assets/videos/lockeandkey.mp4"

//Thumbnails
import syrensofthedeepThumb from "../assets/thumbs/syrensofthedeep.png"
import boyznthehoodThumb from "../assets/thumbs/boyznthehood.png"
import thecircleThumb from "../assets/thumbs/thecircle.png"
import ghostintheshellThumb from "../assets/thumbs/ghostintheshell.png"
import looperThumb from "../assets/thumbs/looper.png"
import spidermanThumb from "../assets/thumbs/spiderman.png"
import strangerthingsThumb from "../assets/thumbs/strangerthings-1.png"
import justiceleagueThumb from "../assets/thumbs/justiceleague.png"
import lockeandkeyThumb from "../assets/thumbs/lockeandkey.png"

//Screens
import syrensofthedeepScreen from "../assets/screens/syrensofthedeep.jpg"
import boyznthehoodScreen from "../assets/screens/boyznthehood.jpg"
import thecircleScreen from "../assets/screens/thecircle.png"
import ghostintheshellScreen from "../assets/screens/ghostintheshell.png"
import looperScreen from "../assets/screens/looper.jpg"
import spidermanScreen from "../assets/screens/spiderman.jpg"
import strangerthingsScreen from "../assets/screens/strangerthings.jpg"
import justiceleagueScreen from "../assets/screens/justiceleague.jpg"
import lockeandkeyScreen from "../assets/screens/lockeandkey.png"

const files = {
    
    //videos
    syrensofthedeep,
    boyznthehood,
    thecircle,
    ghostintheshell,
    looper,
    spiderman,
    strangerthings,
    justiceleague,
    lockeandkey,

    //Thumbs
    syrensofthedeepThumb,
    boyznthehoodThumb,
    thecircleThumb,
    ghostintheshellThumb,
    looperThumb,
    spidermanThumb,
    strangerthingsThumb,
    justiceleagueThumb,
    lockeandkeyThumb,
    
    //Screens
    syrensofthedeepScreen,
    boyznthehoodScreen,
    thecircleScreen,
    ghostintheshellScreen,
    looperScreen,
    spidermanScreen,
    strangerthingsScreen,
    justiceleagueScreen,
    lockeandkeyScreen,
}

const offsets = [ 0, 1, 2 , -1, 0, 1, -.5, 0, 2 ]
const adjectives = [
    "captivating",
    "intriguing",
    "engaging",
    "suspenseful",
    "entertaining",
    "provoking",
    "gripping",
    "compelling",
    "exciting",
    "addictive",
    "dynamic",
    "innovative",
    "refreshing",
    "provocative",
    "immersive"
  ]
export { files, movies,offsets,adjectives  }