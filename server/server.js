const express = require("express");
const ytdl = require("youtube-dl-exec");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 5000;

/** CORS */
app.use(cors());
app.use(express.json());

/** API - download youtube */
app.post("/download", async (req, res) => {
  const { url } = req.body;

  if (!url || !url.includes("youtube.com")) {
    return res.status(400).json({ message: "請提供有效的 YouTube 影片網址" });
  }

  try {
    const videoTitle = uuidv4(); // 使用 uuid 作為檔案名稱
    const downloadPath = path.join(__dirname, "downloads", `${videoTitle}.mp4`);

    // 確保下載資料夾存在
    if (!fs.existsSync(path.dirname(downloadPath))) {
      fs.mkdirSync(path.dirname(downloadPath), { recursive: true });
    }

    // 使用 youtube-dl-exec 下載影片，強制下載 MP4 格式
    await ytdl(url, {
      output: downloadPath,
      format: "mp4",
    });

    // 下載完成後，提供影片檔案並刪除檔案
    res.download(downloadPath, `${videoTitle}.mp4`, (err) => {
      if (err) {
        res.status(500).json({ message: "檔案下載錯誤，下載失敗" });
      } else {
        // 影片下載完成後，刪除檔案
        fs.unlink(downloadPath, (err) => {
          if (err) {
            console.error("刪除檔案錯誤:", err);
          } else {
            console.log("影片檔案已刪除");
          }
        });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "檔案下載錯誤，下載失敗" });
  }
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`伺服器正在運行於 http://localhost:${port}`);
});
