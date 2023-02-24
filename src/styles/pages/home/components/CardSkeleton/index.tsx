import { CardContainer, ItemOne, ItemThree, ItemTwo } from './style'
import 'keen-slider/keen-slider.min.css'

export function CardSkeleton({ className }: { className: string }) {
  return (
    <CardContainer className={className}>
      <ItemOne></ItemOne>
      <div>
        <ItemTwo></ItemTwo>
        <ItemThree></ItemThree>
      </div>
    </CardContainer>
  )
}
