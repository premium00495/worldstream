export default function handler(req, res) {
  res.status(200).json({
    urls: {
      "240p": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      "360p": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      "480p": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      "720p": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      "1080p": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }
  });
}
