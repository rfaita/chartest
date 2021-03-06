import React, { useState, useEffect } from "react";
import "./App.css";

import { Line } from "react-chartjs-2";


export default function App() {

  const [data, setData] = useState({});
  const [minValue, setMinValue] = useState(0);
  const [region, setRegion] = useState('');
  const [rawData, setRawData] = useState([]);


  useEffect(() => {

    //fetch('SUA API AQUI').then(response => response.json()).then(data => setRawData(data));

    setRawData([
      {"id":1,"birthday":7,"spend":1158,"region":"Latin America"},
{"id":2,"birthday":10,"spend":1091,"region":"United States"},
{"id":3,"birthday":7,"spend":3426,"region":"Latin America"},
{"id":4,"birthday":6,"spend":1117,"region":"United States"},
{"id":5,"birthday":3,"spend":3304,"region":"APAC"},
{"id":6,"birthday":8,"spend":1609,"region":"United States"},
{"id":7,"birthday":9,"spend":116,"region":"APAC"},
{"id":8,"birthday":6,"spend":2532,"region":"APAC"},
{"id":9,"birthday":9,"spend":1309,"region":"Asia"},
{"id":10,"birthday":10,"spend":1366,"region":"United States"},
{"id":11,"birthday":11,"spend":3446,"region":"United States"},
{"id":12,"birthday":10,"spend":4951,"region":"United States"},
{"id":13,"birthday":8,"spend":3956,"region":"Asia"},
{"id":14,"birthday":9,"spend":2901,"region":"Latin America"},
{"id":15,"birthday":3,"spend":2734,"region":"Asia"},
{"id":16,"birthday":2,"spend":1463,"region":"APAC"},
{"id":17,"birthday":1,"spend":3792,"region":"Asia"},
{"id":18,"birthday":6,"spend":545,"region":"United States"},
{"id":19,"birthday":1,"spend":1203,"region":"APAC"},
{"id":20,"birthday":7,"spend":3685,"region":"United States"},
{"id":21,"birthday":12,"spend":2706,"region":"Latin America"},
{"id":22,"birthday":12,"spend":1644,"region":"Asia"},
{"id":23,"birthday":8,"spend":1954,"region":"Asia"},
{"id":24,"birthday":9,"spend":3296,"region":"Latin America"},
{"id":25,"birthday":5,"spend":1566,"region":"United States"},
{"id":26,"birthday":5,"spend":2469,"region":"Latin America"},
{"id":27,"birthday":3,"spend":4415,"region":"United States"},
{"id":28,"birthday":10,"spend":2198,"region":"Asia"},
{"id":29,"birthday":6,"spend":1307,"region":"Asia"},
{"id":30,"birthday":4,"spend":984,"region":"APAC"},
{"id":31,"birthday":3,"spend":2454,"region":"Asia"},
{"id":32,"birthday":7,"spend":4939,"region":"APAC"},
{"id":33,"birthday":4,"spend":674,"region":"United States"},
{"id":34,"birthday":4,"spend":1362,"region":"United States"},
{"id":35,"birthday":5,"spend":871,"region":"APAC"},
{"id":36,"birthday":2,"spend":4569,"region":"Asia"},
{"id":37,"birthday":11,"spend":3026,"region":"United States"},
{"id":38,"birthday":6,"spend":3704,"region":"United States"},
{"id":39,"birthday":9,"spend":344,"region":"Asia"},
{"id":40,"birthday":2,"spend":2481,"region":"APAC"},
{"id":41,"birthday":11,"spend":2621,"region":"Asia"},
{"id":42,"birthday":6,"spend":2473,"region":"Latin America"},
{"id":43,"birthday":11,"spend":3877,"region":"APAC"},
{"id":44,"birthday":3,"spend":95,"region":"Latin America"},
{"id":45,"birthday":11,"spend":2523,"region":"Latin America"},
{"id":46,"birthday":11,"spend":2457,"region":"United States"},
{"id":47,"birthday":2,"spend":3425,"region":"United States"},
{"id":48,"birthday":5,"spend":2491,"region":"APAC"},
{"id":49,"birthday":12,"spend":3931,"region":"Latin America"},
{"id":50,"birthday":6,"spend":588,"region":"APAC"},
{"id":51,"birthday":7,"spend":3038,"region":"Asia"},
{"id":52,"birthday":2,"spend":4443,"region":"Asia"},
{"id":53,"birthday":2,"spend":2553,"region":"APAC"},
{"id":54,"birthday":4,"spend":2495,"region":"APAC"},
{"id":55,"birthday":1,"spend":1432,"region":"United States"},
{"id":56,"birthday":9,"spend":3117,"region":"APAC"},
{"id":57,"birthday":10,"spend":2092,"region":"United States"},
{"id":58,"birthday":1,"spend":1380,"region":"APAC"},
{"id":59,"birthday":1,"spend":3557,"region":"Latin America"},
{"id":60,"birthday":1,"spend":4215,"region":"APAC"},
{"id":61,"birthday":4,"spend":662,"region":"Asia"},
{"id":62,"birthday":7,"spend":4394,"region":"Latin America"},
{"id":63,"birthday":8,"spend":2703,"region":"United States"},
{"id":64,"birthday":6,"spend":3375,"region":"Latin America"},
{"id":65,"birthday":11,"spend":3481,"region":"APAC"},
{"id":66,"birthday":4,"spend":1675,"region":"APAC"},
{"id":67,"birthday":2,"spend":4077,"region":"United States"},
{"id":68,"birthday":1,"spend":2664,"region":"Asia"},
{"id":69,"birthday":6,"spend":2725,"region":"Asia"},
{"id":70,"birthday":12,"spend":4895,"region":"Latin America"},
{"id":71,"birthday":2,"spend":73,"region":"Latin America"},
{"id":72,"birthday":6,"spend":399,"region":"Latin America"},
{"id":73,"birthday":8,"spend":146,"region":"Latin America"},
{"id":74,"birthday":10,"spend":1493,"region":"Latin America"},
{"id":75,"birthday":12,"spend":741,"region":"United States"},
{"id":76,"birthday":1,"spend":4940,"region":"Asia"},
{"id":77,"birthday":5,"spend":4632,"region":"Asia"},
{"id":78,"birthday":10,"spend":327,"region":"United States"},
{"id":79,"birthday":1,"spend":4254,"region":"Latin America"},
{"id":80,"birthday":12,"spend":3218,"region":"Asia"},
{"id":81,"birthday":3,"spend":1553,"region":"Latin America"},
{"id":82,"birthday":8,"spend":3437,"region":"APAC"},
{"id":83,"birthday":12,"spend":1647,"region":"Asia"},
{"id":84,"birthday":4,"spend":761,"region":"Latin America"},
{"id":85,"birthday":1,"spend":3750,"region":"APAC"},
{"id":86,"birthday":11,"spend":3676,"region":"Asia"},
{"id":87,"birthday":1,"spend":3657,"region":"Latin America"},
{"id":88,"birthday":2,"spend":1448,"region":"Latin America"},
{"id":89,"birthday":11,"spend":419,"region":"APAC"},
{"id":90,"birthday":5,"spend":2712,"region":"Asia"},
{"id":91,"birthday":7,"spend":1699,"region":"United States"},
{"id":92,"birthday":5,"spend":3817,"region":"Latin America"},
{"id":93,"birthday":11,"spend":3454,"region":"Latin America"},
{"id":94,"birthday":1,"spend":981,"region":"Asia"},
{"id":95,"birthday":9,"spend":3816,"region":"United States"},
{"id":96,"birthday":12,"spend":3878,"region":"Asia"},
{"id":97,"birthday":12,"spend":2896,"region":"Asia"},
{"id":98,"birthday":7,"spend":3292,"region":"United States"},
{"id":99,"birthday":4,"spend":3958,"region":"United States"},
{"id":100,"birthday":12,"spend":2841,"region":"Asia"},
{"id":101,"birthday":5,"spend":1720,"region":"APAC"},
{"id":102,"birthday":10,"spend":3810,"region":"United States"},
{"id":103,"birthday":10,"spend":2228,"region":"United States"},
{"id":104,"birthday":1,"spend":3717,"region":"United States"},
{"id":105,"birthday":6,"spend":4892,"region":"APAC"},
{"id":106,"birthday":9,"spend":2201,"region":"Asia"},
{"id":107,"birthday":10,"spend":4259,"region":"Asia"},
{"id":108,"birthday":6,"spend":1435,"region":"Latin America"},
{"id":109,"birthday":7,"spend":3552,"region":"United States"},
{"id":110,"birthday":7,"spend":3557,"region":"United States"},
{"id":111,"birthday":12,"spend":3425,"region":"Latin America"},
{"id":112,"birthday":8,"spend":262,"region":"United States"},
{"id":113,"birthday":11,"spend":1134,"region":"APAC"},
{"id":114,"birthday":1,"spend":3657,"region":"Asia"},
{"id":115,"birthday":4,"spend":2613,"region":"Latin America"},
{"id":116,"birthday":3,"spend":1970,"region":"Latin America"},
{"id":117,"birthday":5,"spend":1146,"region":"APAC"},
{"id":118,"birthday":9,"spend":4791,"region":"United States"},
{"id":119,"birthday":7,"spend":1901,"region":"APAC"},
{"id":120,"birthday":12,"spend":1085,"region":"United States"},
{"id":121,"birthday":11,"spend":154,"region":"APAC"},
{"id":122,"birthday":12,"spend":4629,"region":"United States"},
{"id":123,"birthday":2,"spend":4264,"region":"APAC"},
{"id":124,"birthday":2,"spend":2309,"region":"APAC"},
{"id":125,"birthday":3,"spend":1324,"region":"Asia"},
{"id":126,"birthday":4,"spend":3323,"region":"United States"},
{"id":127,"birthday":9,"spend":4436,"region":"Latin America"},
{"id":128,"birthday":9,"spend":4015,"region":"Asia"},
{"id":129,"birthday":4,"spend":1641,"region":"Asia"},
{"id":130,"birthday":2,"spend":4908,"region":"United States"},
{"id":131,"birthday":12,"spend":3634,"region":"APAC"},
{"id":132,"birthday":8,"spend":3548,"region":"Latin America"},
{"id":133,"birthday":12,"spend":1840,"region":"United States"},
{"id":134,"birthday":4,"spend":882,"region":"United States"},
{"id":135,"birthday":1,"spend":4032,"region":"United States"},
{"id":136,"birthday":11,"spend":627,"region":"APAC"},
{"id":137,"birthday":4,"spend":2097,"region":"Latin America"},
{"id":138,"birthday":2,"spend":3861,"region":"United States"},
{"id":139,"birthday":3,"spend":2821,"region":"Asia"},
{"id":140,"birthday":8,"spend":4644,"region":"Latin America"},
{"id":141,"birthday":11,"spend":3076,"region":"APAC"},
{"id":142,"birthday":10,"spend":3470,"region":"APAC"},
{"id":143,"birthday":1,"spend":2697,"region":"APAC"},
{"id":144,"birthday":9,"spend":2025,"region":"APAC"},
{"id":145,"birthday":4,"spend":2297,"region":"Latin America"},
{"id":146,"birthday":2,"spend":2780,"region":"United States"},
{"id":147,"birthday":9,"spend":182,"region":"Latin America"},
{"id":148,"birthday":1,"spend":3313,"region":"United States"},
{"id":149,"birthday":7,"spend":1712,"region":"Asia"},
{"id":150,"birthday":9,"spend":664,"region":"Latin America"},
{"id":151,"birthday":4,"spend":3337,"region":"APAC"},
{"id":152,"birthday":1,"spend":1660,"region":"Latin America"},
{"id":153,"birthday":6,"spend":3738,"region":"APAC"},
{"id":154,"birthday":5,"spend":376,"region":"United States"},
{"id":155,"birthday":8,"spend":176,"region":"Latin America"},
{"id":156,"birthday":10,"spend":3269,"region":"APAC"},
{"id":157,"birthday":7,"spend":2620,"region":"APAC"},
{"id":158,"birthday":8,"spend":2729,"region":"United States"},
{"id":159,"birthday":12,"spend":2176,"region":"APAC"},
{"id":160,"birthday":1,"spend":3894,"region":"Asia"},
{"id":161,"birthday":11,"spend":2891,"region":"APAC"},
{"id":162,"birthday":3,"spend":4228,"region":"Asia"},
{"id":163,"birthday":2,"spend":2074,"region":"United States"},
{"id":164,"birthday":1,"spend":2675,"region":"Asia"},
{"id":165,"birthday":12,"spend":803,"region":"APAC"},
{"id":166,"birthday":2,"spend":3195,"region":"Latin America"},
{"id":167,"birthday":12,"spend":722,"region":"APAC"},
{"id":168,"birthday":9,"spend":3344,"region":"Asia"},
{"id":169,"birthday":11,"spend":3493,"region":"Latin America"},
{"id":170,"birthday":4,"spend":4729,"region":"United States"},
{"id":171,"birthday":7,"spend":4713,"region":"Asia"},
{"id":172,"birthday":8,"spend":4976,"region":"United States"},
{"id":173,"birthday":12,"spend":1338,"region":"APAC"},
{"id":174,"birthday":4,"spend":1480,"region":"Latin America"},
{"id":175,"birthday":9,"spend":1050,"region":"Latin America"},
{"id":176,"birthday":10,"spend":1352,"region":"Asia"},
{"id":177,"birthday":3,"spend":4827,"region":"United States"},
{"id":178,"birthday":6,"spend":4137,"region":"Asia"},
{"id":179,"birthday":11,"spend":1048,"region":"APAC"},
{"id":180,"birthday":5,"spend":2437,"region":"APAC"},
{"id":181,"birthday":9,"spend":2733,"region":"United States"},
{"id":182,"birthday":12,"spend":4207,"region":"APAC"},
{"id":183,"birthday":2,"spend":1110,"region":"Latin America"},
{"id":184,"birthday":6,"spend":301,"region":"Latin America"},
{"id":185,"birthday":9,"spend":4172,"region":"APAC"},
{"id":186,"birthday":5,"spend":4383,"region":"United States"},
{"id":187,"birthday":7,"spend":1755,"region":"Latin America"},
{"id":188,"birthday":10,"spend":3554,"region":"United States"},
{"id":189,"birthday":3,"spend":4881,"region":"Latin America"},
{"id":190,"birthday":2,"spend":3444,"region":"Latin America"},
{"id":191,"birthday":11,"spend":2582,"region":"United States"},
{"id":192,"birthday":2,"spend":3994,"region":"Asia"},
{"id":193,"birthday":7,"spend":116,"region":"United States"},
{"id":194,"birthday":3,"spend":1550,"region":"Asia"},
{"id":195,"birthday":12,"spend":4083,"region":"APAC"},
{"id":196,"birthday":6,"spend":3821,"region":"Asia"},
{"id":197,"birthday":11,"spend":288,"region":"Latin America"},
{"id":198,"birthday":9,"spend":3083,"region":"Asia"},
{"id":199,"birthday":1,"spend":517,"region":"Latin America"},
{"id":200,"birthday":3,"spend":1905,"region":"Asia"},
{"id":201,"birthday":2,"spend":1997,"region":"Asia"},
{"id":202,"birthday":7,"spend":4550,"region":"Asia"},
{"id":203,"birthday":9,"spend":4780,"region":"United States"},
{"id":204,"birthday":9,"spend":4746,"region":"Asia"},
{"id":205,"birthday":10,"spend":1904,"region":"Asia"},
{"id":206,"birthday":10,"spend":644,"region":"United States"},
{"id":207,"birthday":7,"spend":2075,"region":"Asia"},
{"id":208,"birthday":1,"spend":3358,"region":"Asia"},
{"id":209,"birthday":3,"spend":4390,"region":"Latin America"},
{"id":210,"birthday":2,"spend":2899,"region":"Latin America"},
{"id":211,"birthday":11,"spend":1362,"region":"Asia"},
{"id":212,"birthday":5,"spend":2180,"region":"Asia"},
{"id":213,"birthday":4,"spend":3046,"region":"APAC"},
{"id":214,"birthday":7,"spend":1010,"region":"United States"},
{"id":215,"birthday":6,"spend":1177,"region":"United States"},
{"id":216,"birthday":1,"spend":4262,"region":"Latin America"},
{"id":217,"birthday":1,"spend":4007,"region":"United States"},
{"id":218,"birthday":10,"spend":3857,"region":"United States"},
{"id":219,"birthday":11,"spend":3337,"region":"APAC"},
{"id":220,"birthday":6,"spend":589,"region":"Asia"},
{"id":221,"birthday":7,"spend":2799,"region":"APAC"},
{"id":222,"birthday":11,"spend":4225,"region":"APAC"},
{"id":223,"birthday":3,"spend":105,"region":"United States"},
{"id":224,"birthday":5,"spend":279,"region":"Latin America"},
{"id":225,"birthday":10,"spend":1636,"region":"Latin America"},
{"id":226,"birthday":4,"spend":672,"region":"Latin America"},
{"id":227,"birthday":3,"spend":4256,"region":"APAC"},
{"id":228,"birthday":8,"spend":4985,"region":"Asia"},
{"id":229,"birthday":10,"spend":1493,"region":"Asia"},
{"id":230,"birthday":4,"spend":3958,"region":"United States"},
{"id":231,"birthday":1,"spend":4745,"region":"Latin America"},
{"id":232,"birthday":4,"spend":154,"region":"Asia"},
{"id":233,"birthday":7,"spend":4740,"region":"Latin America"},
{"id":234,"birthday":4,"spend":3558,"region":"APAC"},
{"id":235,"birthday":12,"spend":4592,"region":"United States"},
{"id":236,"birthday":10,"spend":2147,"region":"APAC"},
{"id":237,"birthday":9,"spend":4779,"region":"United States"},
{"id":238,"birthday":9,"spend":199,"region":"Latin America"},
{"id":239,"birthday":11,"spend":2862,"region":"Latin America"},
{"id":240,"birthday":4,"spend":4528,"region":"Asia"},
{"id":241,"birthday":2,"spend":1401,"region":"United States"},
{"id":242,"birthday":3,"spend":620,"region":"Asia"},
{"id":243,"birthday":3,"spend":3987,"region":"Asia"},
{"id":244,"birthday":10,"spend":3015,"region":"United States"},
{"id":245,"birthday":11,"spend":92,"region":"Latin America"},
{"id":246,"birthday":7,"spend":3015,"region":"Latin America"},
{"id":247,"birthday":9,"spend":4328,"region":"Asia"},
{"id":248,"birthday":7,"spend":2630,"region":"United States"},
{"id":249,"birthday":12,"spend":1444,"region":"United States"},
{"id":250,"birthday":7,"spend":581,"region":"Latin America"},
{"id":251,"birthday":3,"spend":3783,"region":"Latin America"},
{"id":252,"birthday":6,"spend":831,"region":"APAC"},
{"id":253,"birthday":9,"spend":2253,"region":"United States"},
{"id":254,"birthday":1,"spend":3788,"region":"APAC"},
{"id":255,"birthday":3,"spend":3139,"region":"APAC"},
{"id":256,"birthday":5,"spend":727,"region":"Asia"},
{"id":257,"birthday":12,"spend":4110,"region":"APAC"},
{"id":258,"birthday":7,"spend":3065,"region":"APAC"},
{"id":259,"birthday":9,"spend":4167,"region":"Latin America"},
{"id":260,"birthday":4,"spend":2282,"region":"APAC"},
{"id":261,"birthday":8,"spend":2996,"region":"APAC"},
{"id":262,"birthday":3,"spend":92,"region":"APAC"},
{"id":263,"birthday":5,"spend":2993,"region":"Latin America"},
{"id":264,"birthday":2,"spend":3687,"region":"United States"},
{"id":265,"birthday":3,"spend":2269,"region":"Asia"},
{"id":266,"birthday":9,"spend":4523,"region":"United States"},
{"id":267,"birthday":6,"spend":2213,"region":"APAC"},
{"id":268,"birthday":10,"spend":1190,"region":"APAC"},
{"id":269,"birthday":6,"spend":4443,"region":"Asia"},
{"id":270,"birthday":5,"spend":2067,"region":"APAC"},
{"id":271,"birthday":12,"spend":3996,"region":"APAC"},
{"id":272,"birthday":7,"spend":2045,"region":"Latin America"},
{"id":273,"birthday":1,"spend":4386,"region":"Latin America"},
{"id":274,"birthday":9,"spend":3711,"region":"Latin America"},
{"id":275,"birthday":10,"spend":3515,"region":"APAC"},
{"id":276,"birthday":5,"spend":3321,"region":"APAC"},
{"id":277,"birthday":3,"spend":957,"region":"APAC"},
{"id":278,"birthday":8,"spend":2775,"region":"United States"},
{"id":279,"birthday":11,"spend":175,"region":"Latin America"},
{"id":280,"birthday":8,"spend":3086,"region":"United States"},
{"id":281,"birthday":5,"spend":1005,"region":"Latin America"},
{"id":282,"birthday":5,"spend":2229,"region":"APAC"},
{"id":283,"birthday":10,"spend":3916,"region":"APAC"},
{"id":284,"birthday":11,"spend":4246,"region":"APAC"},
{"id":285,"birthday":3,"spend":783,"region":"United States"},
{"id":286,"birthday":5,"spend":2917,"region":"United States"},
{"id":287,"birthday":1,"spend":3110,"region":"Asia"},
{"id":288,"birthday":1,"spend":2986,"region":"United States"},
{"id":289,"birthday":12,"spend":2501,"region":"Latin America"},
{"id":290,"birthday":12,"spend":911,"region":"United States"},
{"id":291,"birthday":8,"spend":2128,"region":"APAC"},
{"id":292,"birthday":1,"spend":348,"region":"Latin America"},
{"id":293,"birthday":4,"spend":3887,"region":"Asia"},
{"id":294,"birthday":6,"spend":909,"region":"United States"},
{"id":295,"birthday":2,"spend":2496,"region":"APAC"},
{"id":296,"birthday":6,"spend":4161,"region":"Asia"},
{"id":297,"birthday":7,"spend":4627,"region":"Asia"},
{"id":298,"birthday":3,"spend":2395,"region":"United States"},
{"id":299,"birthday":11,"spend":917,"region":"Latin America"},
{"id":300,"birthday":5,"spend":3821,"region":"Latin America"},
{"id":301,"birthday":11,"spend":3564,"region":"APAC"},
{"id":302,"birthday":10,"spend":4085,"region":"Latin America"},
{"id":303,"birthday":5,"spend":730,"region":"Asia"},
{"id":304,"birthday":4,"spend":4751,"region":"Asia"},
{"id":305,"birthday":3,"spend":2476,"region":"United States"},
{"id":306,"birthday":8,"spend":2505,"region":"Latin America"},
{"id":307,"birthday":2,"spend":2899,"region":"United States"},
{"id":308,"birthday":4,"spend":408,"region":"Asia"},
{"id":309,"birthday":12,"spend":2863,"region":"APAC"},
{"id":310,"birthday":9,"spend":247,"region":"United States"},
{"id":311,"birthday":7,"spend":1774,"region":"Latin America"},
{"id":312,"birthday":12,"spend":4313,"region":"United States"},
{"id":313,"birthday":11,"spend":3785,"region":"Asia"},
{"id":314,"birthday":7,"spend":2187,"region":"APAC"},
{"id":315,"birthday":1,"spend":1113,"region":"APAC"},
{"id":316,"birthday":1,"spend":1685,"region":"Latin America"},
{"id":317,"birthday":8,"spend":1938,"region":"United States"},
{"id":318,"birthday":3,"spend":485,"region":"United States"},
{"id":319,"birthday":9,"spend":1147,"region":"Asia"},
{"id":320,"birthday":9,"spend":2569,"region":"Asia"},
{"id":321,"birthday":1,"spend":3316,"region":"United States"},
{"id":322,"birthday":6,"spend":304,"region":"United States"},
{"id":323,"birthday":7,"spend":2124,"region":"APAC"},
{"id":324,"birthday":6,"spend":1305,"region":"United States"},
{"id":325,"birthday":3,"spend":59,"region":"Asia"},
{"id":326,"birthday":11,"spend":3931,"region":"United States"},
{"id":327,"birthday":10,"spend":1213,"region":"Asia"},
{"id":328,"birthday":9,"spend":2888,"region":"United States"},
{"id":329,"birthday":9,"spend":1582,"region":"Asia"},
{"id":330,"birthday":8,"spend":2193,"region":"Asia"},
{"id":331,"birthday":12,"spend":4260,"region":"United States"},
{"id":332,"birthday":12,"spend":4496,"region":"APAC"},
{"id":333,"birthday":10,"spend":1003,"region":"APAC"},
{"id":334,"birthday":6,"spend":244,"region":"APAC"},
{"id":335,"birthday":1,"spend":239,"region":"United States"},
{"id":336,"birthday":4,"spend":208,"region":"United States"},
{"id":337,"birthday":10,"spend":1396,"region":"Latin America"},
{"id":338,"birthday":3,"spend":3870,"region":"Asia"},
{"id":339,"birthday":11,"spend":3530,"region":"Asia"},
{"id":340,"birthday":8,"spend":233,"region":"United States"},
{"id":341,"birthday":11,"spend":3606,"region":"Latin America"},
{"id":342,"birthday":5,"spend":3485,"region":"Latin America"},
{"id":343,"birthday":1,"spend":2661,"region":"United States"},
{"id":344,"birthday":10,"spend":1130,"region":"Asia"},
{"id":345,"birthday":1,"spend":1604,"region":"United States"},
{"id":346,"birthday":6,"spend":3589,"region":"Latin America"},
{"id":347,"birthday":12,"spend":4788,"region":"United States"},
{"id":348,"birthday":6,"spend":886,"region":"APAC"},
{"id":349,"birthday":4,"spend":146,"region":"APAC"},
{"id":350,"birthday":5,"spend":2298,"region":"United States"},
{"id":351,"birthday":9,"spend":1060,"region":"Latin America"},
{"id":352,"birthday":7,"spend":4227,"region":"United States"},
{"id":353,"birthday":3,"spend":1521,"region":"United States"},
{"id":354,"birthday":3,"spend":3468,"region":"United States"},
{"id":355,"birthday":2,"spend":3082,"region":"APAC"},
{"id":356,"birthday":8,"spend":351,"region":"Latin America"},
{"id":357,"birthday":5,"spend":3642,"region":"Asia"},
{"id":358,"birthday":1,"spend":78,"region":"Latin America"},
{"id":359,"birthday":2,"spend":511,"region":"Latin America"},
{"id":360,"birthday":4,"spend":4736,"region":"APAC"},
{"id":361,"birthday":8,"spend":1310,"region":"APAC"},
{"id":362,"birthday":1,"spend":286,"region":"APAC"},
{"id":363,"birthday":6,"spend":2644,"region":"APAC"},
{"id":364,"birthday":2,"spend":3232,"region":"Latin America"},
{"id":365,"birthday":12,"spend":3557,"region":"Asia"},
{"id":366,"birthday":9,"spend":4868,"region":"Asia"},
{"id":367,"birthday":4,"spend":1401,"region":"United States"},
{"id":368,"birthday":1,"spend":4599,"region":"Latin America"},
{"id":369,"birthday":6,"spend":2825,"region":"Asia"},
{"id":370,"birthday":8,"spend":1123,"region":"Asia"},
{"id":371,"birthday":2,"spend":4205,"region":"Asia"},
{"id":372,"birthday":7,"spend":4788,"region":"Asia"},
{"id":373,"birthday":10,"spend":1634,"region":"Asia"},
{"id":374,"birthday":11,"spend":855,"region":"United States"},
{"id":375,"birthday":1,"spend":1010,"region":"United States"},
{"id":376,"birthday":2,"spend":3821,"region":"Asia"},
{"id":377,"birthday":12,"spend":3262,"region":"Latin America"},
{"id":378,"birthday":3,"spend":314,"region":"Latin America"},
{"id":379,"birthday":12,"spend":4290,"region":"United States"},
{"id":380,"birthday":8,"spend":4092,"region":"APAC"},
{"id":381,"birthday":9,"spend":2851,"region":"APAC"},
{"id":382,"birthday":8,"spend":4191,"region":"Latin America"},
{"id":383,"birthday":11,"spend":256,"region":"APAC"},
{"id":384,"birthday":2,"spend":3195,"region":"Asia"},
{"id":385,"birthday":4,"spend":4645,"region":"Asia"},
{"id":386,"birthday":6,"spend":3528,"region":"Asia"},
{"id":387,"birthday":5,"spend":4359,"region":"APAC"},
{"id":388,"birthday":10,"spend":2793,"region":"Latin America"},
{"id":389,"birthday":8,"spend":1413,"region":"APAC"},
{"id":390,"birthday":10,"spend":1250,"region":"APAC"},
{"id":391,"birthday":1,"spend":1353,"region":"Asia"},
{"id":392,"birthday":1,"spend":2854,"region":"United States"},
{"id":393,"birthday":3,"spend":132,"region":"Asia"},
{"id":394,"birthday":3,"spend":4619,"region":"Asia"},
{"id":395,"birthday":2,"spend":3335,"region":"APAC"},
{"id":396,"birthday":1,"spend":2747,"region":"Asia"},
{"id":397,"birthday":9,"spend":2804,"region":"Latin America"},
{"id":398,"birthday":8,"spend":750,"region":"United States"},
{"id":399,"birthday":5,"spend":4291,"region":"Latin America"},
{"id":400,"birthday":12,"spend":4383,"region":"Latin America"},
{"id":401,"birthday":3,"spend":4977,"region":"Latin America"},
{"id":402,"birthday":12,"spend":2695,"region":"United States"},
{"id":403,"birthday":2,"spend":4242,"region":"United States"},
{"id":404,"birthday":2,"spend":3846,"region":"Asia"},
{"id":405,"birthday":5,"spend":59,"region":"APAC"},
{"id":406,"birthday":6,"spend":3432,"region":"APAC"},
{"id":407,"birthday":10,"spend":4163,"region":"Latin America"},
{"id":408,"birthday":2,"spend":551,"region":"United States"},
{"id":409,"birthday":3,"spend":1484,"region":"APAC"},
{"id":410,"birthday":10,"spend":786,"region":"Asia"},
{"id":411,"birthday":5,"spend":158,"region":"Latin America"},
{"id":412,"birthday":1,"spend":4577,"region":"APAC"},
{"id":413,"birthday":6,"spend":889,"region":"United States"},
{"id":414,"birthday":6,"spend":2442,"region":"Latin America"},
{"id":415,"birthday":10,"spend":886,"region":"APAC"},
{"id":416,"birthday":5,"spend":2348,"region":"Asia"},
{"id":417,"birthday":8,"spend":2248,"region":"Latin America"},
{"id":418,"birthday":9,"spend":1253,"region":"United States"},
{"id":419,"birthday":9,"spend":47,"region":"Asia"},
{"id":420,"birthday":7,"spend":4790,"region":"United States"},
{"id":421,"birthday":4,"spend":3539,"region":"Asia"},
{"id":422,"birthday":3,"spend":354,"region":"United States"},
{"id":423,"birthday":8,"spend":935,"region":"Asia"},
{"id":424,"birthday":7,"spend":3896,"region":"Latin America"},
{"id":425,"birthday":1,"spend":4416,"region":"Asia"},
{"id":426,"birthday":9,"spend":4415,"region":"United States"},
{"id":427,"birthday":9,"spend":4974,"region":"APAC"},
{"id":428,"birthday":1,"spend":2623,"region":"United States"},
{"id":429,"birthday":8,"spend":421,"region":"United States"},
{"id":430,"birthday":5,"spend":906,"region":"United States"},
{"id":431,"birthday":9,"spend":3631,"region":"Latin America"},
{"id":432,"birthday":5,"spend":4586,"region":"Latin America"},
{"id":433,"birthday":3,"spend":2798,"region":"United States"},
{"id":434,"birthday":5,"spend":374,"region":"APAC"},
{"id":435,"birthday":5,"spend":4376,"region":"Asia"},
{"id":436,"birthday":2,"spend":818,"region":"Latin America"},
{"id":437,"birthday":7,"spend":3227,"region":"United States"},
{"id":438,"birthday":1,"spend":1099,"region":"APAC"},
{"id":439,"birthday":1,"spend":3971,"region":"Latin America"},
{"id":440,"birthday":12,"spend":996,"region":"Latin America"},
{"id":441,"birthday":8,"spend":4769,"region":"APAC"},
{"id":442,"birthday":5,"spend":3898,"region":"Asia"},
{"id":443,"birthday":7,"spend":1268,"region":"Latin America"},
{"id":444,"birthday":8,"spend":4862,"region":"United States"},
{"id":445,"birthday":5,"spend":2568,"region":"Latin America"},
{"id":446,"birthday":2,"spend":2983,"region":"United States"},
{"id":447,"birthday":10,"spend":2645,"region":"Latin America"},
{"id":448,"birthday":7,"spend":1466,"region":"Asia"},
{"id":449,"birthday":12,"spend":42,"region":"United States"},
{"id":450,"birthday":11,"spend":2487,"region":"APAC"},
{"id":451,"birthday":6,"spend":256,"region":"Latin America"},
{"id":452,"birthday":9,"spend":4713,"region":"United States"},
{"id":453,"birthday":2,"spend":2882,"region":"Asia"},
{"id":454,"birthday":1,"spend":4235,"region":"Latin America"},
{"id":455,"birthday":9,"spend":869,"region":"United States"},
{"id":456,"birthday":9,"spend":2653,"region":"Latin America"},
{"id":457,"birthday":4,"spend":556,"region":"Asia"},
{"id":458,"birthday":10,"spend":2566,"region":"United States"},
{"id":459,"birthday":11,"spend":1086,"region":"United States"},
{"id":460,"birthday":7,"spend":3087,"region":"Asia"},
{"id":461,"birthday":11,"spend":1514,"region":"Asia"},
{"id":462,"birthday":11,"spend":2833,"region":"United States"},
{"id":463,"birthday":10,"spend":4774,"region":"Asia"},
{"id":464,"birthday":4,"spend":334,"region":"APAC"},
{"id":465,"birthday":10,"spend":740,"region":"United States"},
{"id":466,"birthday":12,"spend":4332,"region":"United States"},
{"id":467,"birthday":10,"spend":4751,"region":"APAC"},
{"id":468,"birthday":8,"spend":3991,"region":"Asia"},
{"id":469,"birthday":1,"spend":4511,"region":"United States"},
{"id":470,"birthday":11,"spend":2132,"region":"APAC"},
{"id":471,"birthday":7,"spend":1865,"region":"Latin America"},
{"id":472,"birthday":1,"spend":4587,"region":"United States"},
{"id":473,"birthday":11,"spend":2477,"region":"United States"},
{"id":474,"birthday":7,"spend":1003,"region":"APAC"},
{"id":475,"birthday":4,"spend":3756,"region":"Latin America"},
{"id":476,"birthday":4,"spend":4934,"region":"APAC"},
{"id":477,"birthday":7,"spend":54,"region":"APAC"},
{"id":478,"birthday":12,"spend":2182,"region":"Latin America"},
{"id":479,"birthday":4,"spend":2289,"region":"Asia"},
{"id":480,"birthday":2,"spend":2511,"region":"United States"},
{"id":481,"birthday":4,"spend":4187,"region":"United States"},
{"id":482,"birthday":7,"spend":3593,"region":"United States"},
{"id":483,"birthday":11,"spend":4375,"region":"United States"},
{"id":484,"birthday":1,"spend":4263,"region":"APAC"},
{"id":485,"birthday":3,"spend":451,"region":"Asia"},
{"id":486,"birthday":6,"spend":4878,"region":"APAC"},
{"id":487,"birthday":10,"spend":918,"region":"United States"},
{"id":488,"birthday":12,"spend":1157,"region":"United States"},
{"id":489,"birthday":7,"spend":3669,"region":"APAC"},
{"id":490,"birthday":10,"spend":2298,"region":"Asia"},
{"id":491,"birthday":11,"spend":406,"region":"Asia"},
{"id":492,"birthday":9,"spend":352,"region":"Asia"},
{"id":493,"birthday":10,"spend":4699,"region":"Latin America"},
{"id":494,"birthday":8,"spend":926,"region":"Latin America"},
{"id":495,"birthday":9,"spend":4162,"region":"APAC"},
{"id":496,"birthday":9,"spend":4059,"region":"APAC"},
{"id":497,"birthday":9,"spend":762,"region":"United States"},
{"id":498,"birthday":9,"spend":969,"region":"United States"},
{"id":499,"birthday":5,"spend":319,"region":"United States"},
{"id":500,"birthday":1,"spend":2678,"region":"United States"}

    ]);

  }, [])

  useEffect(() => {

    const filteredRawData = rawData.filter(row => row.spend >= minValue && (region === '' || row.region === region));


    let groupByBirthday = filteredRawData.reduce((acc, it) => {
      acc[it.birthday - 1] = acc[it.birthday - 1] + 1 || 1;
      return acc;
    }, []);

    let groupByCumulative = filteredRawData.reduce((acc, it) => {
      acc[it.birthday - 1] = acc[it.birthday - 1] + 5 || 5;

      return acc;
    }, []);

    for (let i = 1; i < groupByCumulative.length; i++) {
      for (let y = i - 1; y >= 0; y--) {
        if (!!groupByCumulative[y]) {
          groupByCumulative[i] += groupByCumulative[y];
          break;
        }
      }
    }

    setData({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dez"],
      datasets: [
        {
          label: "Monthly",
          data: groupByBirthday,
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          spanGaps: true
        },
        {
          label: "Cumulative",
          data: groupByCumulative,
          fill: false,
          borderColor: "#742774",
          spanGaps: true
        }
      ]
    });

  }, [rawData, minValue, region]);



  return (
    <div className="App">
      <label for="minValue">Min. Value (0-5000):</label>
      <input type="number" min="0" max="5000" id="minValue" name="minValue" value={minValue} onChange={event => setMinValue(event.target.value)} />
      <label for="region">Region:</label>
      <select id="region" name="region" value={region} onChange={event => setRegion(event.target.value)} >
        <option value="">All</option>
        <option value="United States">United States</option>
        <option value="APAC">APAC</option>
        <option value="Asia">Asia</option>
        <option value="Latin America">Latin America</option>
      </select>
      <Line data={data} />
    </div>
  );
}