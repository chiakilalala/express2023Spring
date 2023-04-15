# 第四週主線任務

## 本堂作業

- 設計[貼文](https://xd.adobe.com/view/c0763dbe-fc15-42e8-be0b-8956ed03e675-9525/screen/5b6bb2a0-f0f3-4b39-841f-8cf3a0ed9707)的 GET API，並需設計篩選功能(從新到舊貼文、從舊到最新、關鍵字搜尋)
- 設計[貼文](https://xd.adobe.com/view/c0763dbe-fc15-42e8-be0b-8956ed03e675-9525/screen/dfc7891e-63fd-4141-989a-8776ee7ea9f0) POST API，圖片先傳固定 url

> user 資料請先自行建立模擬資訊
> ![](https://i.imgur.com/rcPT5OS.png)

- 請提供 GitHub Repo，並提交到 [Discord](https://discord.com/channels/801807326054055996/1073411249926324234/1091329503038541896) 每日任務

## express 語法

- req.query：取得參數
  - [比價網](https://feebee.com.tw/s/iphone/?pl=3300&ph=12000)
  - [TDX 觀光 API](https://tdx.transportdata.tw/api-service/swagger/basic/cd0226cf-6292-4c35-8a0d-b595f0b15352#/)
- req.params：取得動態路由
- req.body(express 產生器)：獲得 post body，就不需要寫原生接 buffer
