export default function handler(req, res) {
  res.status(200).json({
    urls: {
      "240p": "https://tencentcdn8.tamashaweb.com/v1/019bf00087161567ee93346674d025/019bffb7d77215fc600b1b67f81952/tmsh_srt_output_clone_240p.m3u8",
      "360p": "https://tencentcdn8.tamashaweb.com/v1/019bf00087161567ee93346674d025/019bffb7d77215fc600b1b67f81952/tmsh_srt_output_clone_360p.m3u8",
      "480p": "https://tencentcdn8.tamashaweb.com/v1/019bf00087161567ee93346674d025/019bffb7d77215fc600b1b67f81952/tmsh_srt_output_clone_480p.m3u8",
      "720p": "https://tencentcdn8.tamashaweb.com/v1/019bf00087161567ee93346674d025/019bffb7d77215fc600b1b67f81952/tmsh_srt_output_clone_720p.m3u8",
      "1080p": "https://tencentcdn8.tamashaweb.com/v1/019bf00087161567ee93346674d025/019bffb7d77215fc600b1b67f81952/tmsh_srt_output_clone_1080p.m3u8"
    }
  });
}
