export default function handler(req, res) {
  res.status(200).json({
    urls: {
      "240p": "https://tencentcdn11.tamashaweb.com/v1/019bf9b9eb3215fc600b35c80a5fba/019bffdc5fb61ea540a817848da787/TMSHU1WEB_clone_240p.m3u8",
      "360p": "https://tencentcdn11.tamashaweb.com/v1/019bf9b9eb3215fc600b35c80a5fba/019bffdc5fb61ea540a817848da787/TMSHU1WEB_clone_360p.m3u8",
      "480p": "https://tencentcdn11.tamashaweb.com/v1/019bf9b9eb3215fc600b35c80a5fba/019bffdc5fb61ea540a817848da787/TMSHU1WEB_clone_480p.m3u8",
      "720p": "https://tencentcdn11.tamashaweb.com/v1/019bf9b9eb3215fc600b35c80a5fba/019bffdc5fb61ea540a817848da787/TMSHU1WEB_clone_720p.m3u8",
      "1080p": "https://tencentcdn11.tamashaweb.com/v1/019bf9b9eb3215fc600b35c80a5fba/019bffdc5fb61ea540a817848da787/TMSHU1WEB_clone_1080p.m3u8"
    }
  });
}
