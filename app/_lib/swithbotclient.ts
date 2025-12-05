import { createHmac } from "crypto";
import { v4 as uuid } from "uuid";




export const getDeviceStatus = async ({
  deviceId,
}: {
  deviceId: string;
}) => {
  if (!deviceId) {
    return "off";
  }

  const baseUrl = "https://api.switch-bot.com"
  const path = `/v1.1/devices/${deviceId}/status`
  const token = process.env.SWITCH_BOT_TOKEN || "";
  const secret = process.env.SWITCH_BOT_SECRET || "";
  const t = Date.now();
  const nonce = uuid();

  const message = token + t + nonce;
  const sign = createHmac('sha256', secret)
    .update(message)
    .digest('base64');

  const res = await fetch(baseUrl + path, {
    method: "GET",
    headers: {
      "Authorization": token,
      "sign": sign,
      "t": t.toString(),
      "nonce": nonce,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    return "off";
  }

  const { body:{ power } } = await res.json();
  return power;
}
