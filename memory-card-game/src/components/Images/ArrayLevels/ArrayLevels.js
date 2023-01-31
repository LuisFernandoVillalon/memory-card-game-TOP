import US1 from "../Lv1/us-1.jpg" ;
import US2 from "../Lv1/us-2.jpg" ;
import US3 from "../Lv1/us-3.jpg" ;
import US4 from "../Lv1/us-4.jpg" ;

import japan1 from "../Lv2/japan-1.jpg" ;
import japan2 from "../Lv2/japan-2.jpg" ;
import japan3 from "../Lv2/japan-3.jpg" ;
import japan4 from "../Lv2/japan-4.jpg" ;
import japan5 from "../Lv2/japan-5.jpg" ;
import japan6 from "../Lv2/japan-6.jpg" ;

import brazil1 from "../Lv3/brazil-1.jpg" ;
import brazil2 from "../Lv3/brazil-2.jpg" ;
import brazil3 from "../Lv3/brazil-3.jpg" ;
import brazil4 from "../Lv3/brazil-4.jpg" ;
import brazil5 from "../Lv3/brazil-5.jpg" ;
import brazil6 from "../Lv3/brazil-6.jpg" ;
import brazil7 from "../Lv3/brazil-7.jpg" ;
import brazil8 from "../Lv3/brazil-8.jpg" ;

import italy1 from "../Lv4/italy-1.jpg" ;
import italy2 from "../Lv4/italy-2.jpg" ;
import italy3 from "../Lv4/italy-3.jpg" ;
import italy4 from "../Lv4/italy-4.jpg" ;
import italy5 from "../Lv4/italy-5.jpg" ;
import italy6 from "../Lv4/italy-6.jpg" ;
import italy7 from "../Lv4/italy-7.jpg" ;
import italy8 from "../Lv4/italy-8.jpg" ;
import italy9 from "../Lv4/italy-9.jpg" ;
import italy10 from "../Lv4/italy-10.jpg" ;

import mexico1 from "../Lv5/mexico-1.jpg" ;
import mexico2 from "../Lv5/mexico-2.jpg" ;
import mexico3 from "../Lv5/mexico-3.jpg" ;
import mexico4 from "../Lv5/mexico-4.jpg" ;
import mexico5 from "../Lv5/mexico-5.jpg" ;
import mexico6 from "../Lv5/mexico-6.jpg" ;
import mexico7 from "../Lv5/mexico-7.jpg" ;
import mexico8 from "../Lv5/mexico-8.jpg" ;
import mexico9 from "../Lv5/mexico-9.jpg" ;
import mexico10 from "../Lv5/mexico-10.jpg" ;
import mexico11 from "../Lv5/mexico-11.jpg" ;
import mexico12 from "../Lv5/mexico-12.jpg" ;

export default function populateArrays(levelArray) {

    const usImgs = [
        [US1, 0],
        [US2, 0],
        [US3, 0],
        [US4, 0]
    ]
    
    for (let i = 0; i < usImgs.length; ++i) {
        levelArray.levelOne.push(usImgs[i]);
    }

    const japanImgs = [
        [japan1, 0],
        [japan2, 0],
        [japan3, 0],
        [japan4, 0],
        [japan5, 0],
        [japan6, 0]
    ]
    
    for (let i = 0; i < japanImgs.length; ++i) {
        levelArray.levelTwo.push(japanImgs[i]);
    }

    const brazilImgs = [
        [brazil1, 0],
        [brazil2, 0],
        [brazil3, 0],
        [brazil4, 0],
        [brazil5, 0],
        [brazil6, 0],
        [brazil7, 0],
        [brazil8, 0]
    ]
    
    for (let i = 0; i < brazilImgs.length; ++i) {
        levelArray.levelThree.push(brazilImgs[i]);
    }

    const italyImgs = [
        [italy1, 0],
        [italy2, 0],
        [italy3, 0],
        [italy4, 0],
        [italy5, 0],
        [italy6, 0],
        [italy7, 0],
        [italy8, 0],
        [italy9, 0],
        [italy10, 0]
    ]
    
    for (let i = 0; i < italyImgs.length; ++i) {
        levelArray.levelFour.push(italyImgs[i]);
    }

    const mexicoImgs = [
        [mexico1, 0],
        [mexico2, 0],
        [mexico3, 0],
        [mexico4, 0],
        [mexico5, 0],
        [mexico6, 0],
        [mexico7, 0],
        [mexico8, 0],
        [mexico9, 0],
        [mexico10, 0],
        [mexico11, 0],
        [mexico12, 0]
    ]
    
    for (let i = 0; i < mexicoImgs.length; ++i) {
        levelArray.levelFive.push(mexicoImgs[i]);
    }
    return { levelArray };
}