import './landing-step.component.scss';

export default function LandingStepComponent(props:LandingStepProps){
    const {index, header, description, additionalClass} = props;
    return (
        <div className={`landing-form-step ${additionalClass}`}>
            <h4>{ index }</h4>
            <div className='step'>
                <p className='step-header'>{ header }</p>
                <p>{ description }</p>
            </div>
        </div>
    )
}

export interface LandingStepProps{
    index: number,
    header: string,
    description: string,
    additionalClass: string
}