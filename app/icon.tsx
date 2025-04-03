import { ImageResponse } from "next/og"

export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 16,
        fontWeight: "bold",
        background: "black",
        borderRadius: '50%',
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "serif",
      }}
    >
      RH
    </div>,
    {
      ...size,
    },
  )
}