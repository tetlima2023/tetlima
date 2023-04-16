import { Alert, Fade } from "@mui/material"

export const Notification = (props:{IsShow: boolean}) => {
  return (
    <>
      <Fade in={props.IsShow}>
        <Alert className="absolute top-2 right-2" severity="success" color="info">
          Link copiado!
        </Alert>
      </Fade>
    </>
  )
}