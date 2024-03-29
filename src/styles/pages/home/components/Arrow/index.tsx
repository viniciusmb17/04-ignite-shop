import { ArrowLeft, ArrowRight } from './style'

export function Arrow(props: { left?: boolean; onClick: (e: any) => void }) {
  return (
    <>
      {props.left ? (
        <ArrowLeft
          onClick={props.onClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </ArrowLeft>
      ) : (
        <ArrowRight
          onClick={props.onClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </ArrowRight>
      )}
    </>
  )
}
