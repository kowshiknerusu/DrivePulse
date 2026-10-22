type SeedRow=[string,string,number,number,string,string,string,number,number,string,string,string,string,string[],string[],string[],string[],boolean];
const rows:SeedRow[] = [
  ['Hyundai','Creta',1100000,2018000,'SUV','Petrol','Automatic',5,1497,'115 bhp','17.4 km/l','4330 × 1790 × 1635 mm','5 star',['Panoramic sunroof','Ventilated seats','ADAS'],['E','EX','S(O)','SX Tech','SX(O)'],['Strong feature set','Comfortable ride'],['Some hard plastics'],false],
  ['Tata','Nexon',800000,1530000,'SUV','Petrol','Manual',5,1199,'118 bhp','17.4 km/l','3995 × 1804 × 1620 mm','5 star',['360° camera','Connected car tech','Six airbags'],['Smart','Pure','Creative'],['Strong safety package','Multiple powertrains'],['Rear seat width'],false],
  ['Maruti Suzuki','Brezza',840000,1460000,'SUV','Petrol','Automatic',5,1462,'102 bhp','19.8 km/l','3995 × 1790 × 1685 mm','4 star',['Head-up display','Sunroof','Wireless CarPlay'],['LXi','VXi','ZXi','ZXi+'],['Efficient engine','Easy to own'],['No diesel option'],false],
  ['Mahindra','XUV 3XO',780000,1549000,'SUV','Petrol','Automatic',5,1197,'128 bhp','18.9 km/l','3990 × 1821 × 1647 mm','5 star',['Dual-zone climate','ADAS','Panoramic sunroof'],['MX1','AX5','AX7L'],['Punchy turbo engines','Rich equipment'],['Boot is modest'],false],
  ['Kia','Seltos',1090000,2019000,'SUV','Diesel','Automatic',5,1493,'114 bhp','20.7 km/l','4365 × 1800 × 1645 mm','3 star',['Dual screens','ADAS','Bose audio'],['HTE','HTK','HTX','GTX+'],['Wide powertrain range','Premium cabin'],['Safety rating opportunity'],false],
  ['Toyota','Innova Hycross',1916000,3098000,'MPV','Hybrid','Automatic',7,1987,'184 bhp','23.2 km/l','4755 × 1845 × 1790 mm','5 star',['ADAS','Powered ottoman seats','Panoramic roof'],['G','GX','VX','ZX'],['Spacious cabin','Efficient hybrid'],['Large footprint'],false],
  ['Honda','City',1195000,1635000,'Sedan','Petrol','CVT',5,1498,'119 bhp','18.4 km/l','4583 × 1748 × 1489 mm','5 star',['LaneWatch','Honda Sensing','Sunroof'],['SV','V','VX','ZX'],['Refined engine','Generous rear seat'],['Ground clearance'],false],
  ['Volkswagen','Virtus',1106000,1888000,'Sedan','Petrol','Automatic',5,1498,'148 bhp','19.6 km/l','4561 × 1752 × 1507 mm','5 star',['Digital cockpit','Ventilated seats','Six airbags'],['Comfortline','Highline','GT Plus'],['Engaging drive','Powerful turbo'],['Firm low-speed ride'],false],
  ['Skoda','Slavia',1090000,1890000,'Sedan','Petrol','Automatic',5,1498,'148 bhp','19.4 km/l','4541 × 1752 × 1507 mm','5 star',['Sunroof','Wireless charging','Ventilated seats'],['Active','Ambition','Style','Monte Carlo'],['Large boot','Fun to drive'],['Some interior rattles reported'],false],
  ['Maruti Suzuki','Dzire',679000,968000,'Sedan','Petrol','AMT',5,1197,'80 bhp','25.7 km/l','3995 × 1735 × 1525 mm','5 star',['Wireless CarPlay','Cruise control','Six airbags'],['LXi','VXi','ZXi','ZXi+'],['Excellent efficiency','Compact and easy'],['Modest highway performance'],false],
  ['Hyundai','i20',707000,1192000,'Hatchback','Petrol','IVT',5,1197,'87 bhp','20.4 km/l','3995 × 1775 × 1505 mm','3 star',['Bose audio','Sunroof','Digital cluster'],['Era','Magna','Sportz','Asta'],['Premium cabin','Feature rich'],['Safety score could improve'],false],
  ['Maruti Suzuki','Baleno',666000,998000,'Hatchback','Petrol','AMT',5,1197,'88 bhp','22.9 km/l','3990 × 1745 × 1500 mm','4 star',['HUD','360° camera','Connected display'],['Sigma','Delta','Zeta','Alpha'],['Fuel efficient','Roomy cabin'],['Light steering feedback'],false],
  ['Tata','Tiago EV',800000,1190000,'Hatchback','Electric','Automatic',5,0,'74 bhp','315 km range','3769 × 1677 × 1536 mm','4 star',['Fast charging','Connected tech','Cruise control'],['XE','XT','XZ+'],['Easy city EV','Affordable running'],['Range for longer trips'],false],
  ['MG','Comet EV',700000,990000,'Hatchback','Electric','Automatic',4,0,'41 bhp','230 km range','2974 × 1505 × 1640 mm','Not rated',['Wireless CarPlay','Compact footprint','Connected app'],['Executive','Excite','Exclusive'],['Tiny parking footprint','Low running cost'],['Two-door access'],false],
  ['Tata','Punch EV',1000000,1444000,'SUV','Electric','Automatic',5,0,'120 bhp','421 km range','3857 × 1742 × 1633 mm','5 star',['V2L','360° camera','Fast charging'],['Smart','Adventure','Empowered+'],['Useful range','High ground clearance'],['Rear cabin space'],false],
  ['Mahindra','BE 6',1890000,2690000,'SUV','Electric','Automatic',5,0,'282 bhp','557 km range','4371 × 1907 × 1627 mm','Not rated',['Level 2 ADAS','Augmented reality HUD','V2L'],['Pack One','Pack Two','Pack Three'],['Long claimed range','Distinctive design'],['New model; limited ownership data'],true],
  ['BYD','Atto 3',2499000,3399000,'SUV','Electric','Automatic',5,0,'201 bhp','521 km range','4455 × 1875 × 1615 mm','5 star',['Panoramic roof','Rotating screen','ADAS'],['Dynamic','Premium','Superior'],['Spacious EV','Strong feature set'],['Premium pricing'],false],
  ['BMW','3 Series',7290000,7550000,'Sedan','Petrol','Automatic',5,1998,'255 bhp','15.3 km/l','4713 × 1827 × 1440 mm','5 star',['Driving assistant','Curved display','Sunroof'],['330Li M Sport'],['Excellent dynamics','Premium cabin'],['High ownership cost'],false],
  ['Mercedes-Benz','C-Class',6100000,6760000,'Sedan','Petrol','Automatic',5,1496,'201 bhp','16.9 km/l','4751 × 1820 × 1437 mm','5 star',['MBUX','Burmester audio','ADAS'],['C 200','C 220d'],['Refined ride','High quality interior'],['Rear headroom'],false],
  ['Hyundai','Ioniq 5',4649000,4649000,'SUV','Electric','Automatic',5,0,'214 bhp','631 km range','4635 × 1890 × 1625 mm','5 star',['Ultra-fast charging','V2L','ADAS'],['Long Range RWD'],['Very fast charging','Airy cabin'],['Limited service footprint'],false]
];
const carPhotos=[
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/2024_Hyundai_Creta_1.5_MPi_SX%28O%29_%28India%29_front_view.png/1280px-2024_Hyundai_Creta_1.5_MPi_SX%28O%29_%28India%29_front_view.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tata_Nexon_Blue_Dual_Tone.jpg/1280px-Tata_Nexon_Blue_Dual_Tone.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/2022_Maruti_Suzuki_Brezza_ZXi%2B_%28India%29_front_view_03.png/1280px-2022_Maruti_Suzuki_Brezza_ZXi%2B_%28India%29_front_view_03.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/2025_Mahindra_XUV_3XO_AX7L_front.jpg/1280px-2025_Mahindra_XUV_3XO_AX7L_front.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Kia_Seltos_SP2_PE_Snow_White_Pearl_%2817%29_%28cropped%29.jpg/1280px-Kia_Seltos_SP2_PE_Snow_White_Pearl_%2817%29_%28cropped%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Toyota_Zenix_2.0_V_2023_%284%29.jpg/1280px-Toyota_Zenix_2.0_V_2023_%284%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/2022_Honda_City_ZX_i-VTEC_%28India%29_front_view_%28cropped%29.jpg/1280px-2022_Honda_City_ZX_i-VTEC_%28India%29_front_view_%28cropped%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/2022_Volkswagen_Virtus_1.5_GT_%28India%29_front_view_02.png/1280px-2022_Volkswagen_Virtus_1.5_GT_%28India%29_front_view_02.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/2021_%C5%A0koda_Slavia_1.5_TSI_Style_%28India%29_front_view.png/1280px-2021_%C5%A0koda_Slavia_1.5_TSI_Style_%28India%29_front_view.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Suzuki_Dzire_2024_ZXI%2B.jpg/1280px-Suzuki_Dzire_2024_ZXI%2B.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Hyundai_i20_%28III%2C_Facelift%29_%E2%80%93_f_11102025.jpg/1280px-Hyundai_i20_%28III%2C_Facelift%29_%E2%80%93_f_11102025.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/2022_Maruti_Suzuki_Baleno_Alpha_%28India%29_front_view.jpg/1280px-2022_Maruti_Suzuki_Baleno_Alpha_%28India%29_front_view.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/2022_Tata_Tiago_EV_IB_XZ%2B_Tech_LR_front_view.png/1280px-2022_Tata_Tiago_EV_IB_XZ%2B_Tech_LR_front_view.png',
  'https://upload.wikimedia.org/wikipedia/commons/4/4d/2023_MG_Comet_EV_Plush_%28India%29.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Tata_punch.ev.jpg/1280px-Tata_punch.ev.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Mahindra_BE6_pic_1.jpg/1280px-Mahindra_BE6_pic_1.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/BYD_Atto_3_1X7A6491.jpg/1280px-BYD_Atto_3_1X7A6491.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BMW_G20_%282022%29_IMG_7316_%282%29.jpg/1280px-BMW_G20_%282022%29_IMG_7316_%282%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Mercedes-Benz_W206_IMG_6380.jpg/1280px-Mercedes-Benz_W206_IMG_6380.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Hyundai_Ioniq_5_AWD_Techniq-Paket_%E2%80%93_f_31122024.jpg/1280px-Hyundai_Ioniq_5_AWD_Techniq-Paket_%E2%80%93_f_31122024.jpg'
];
export const seedCars=rows.map((v,i)=>({make:v[0],model:v[1],basePrice:v[2],topPrice:v[3],bodyType:v[4],fuelType:v[5],transmission:v[6],seating:v[7],engineCc:v[8],maxPower:v[9],mileageOrRange:v[10],dimensions:v[11],safetyRating:v[12],features:v[13],variants:v[14],pros:v[15],cons:v[16],upcoming:v[17],images:[carPhotos[i]],_seedIndex:i}));
export const catalogMetadata={notice:'All prices, specs, and availability are illustrative demo data for portfolio purposes.'};
