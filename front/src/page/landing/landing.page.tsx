import './landing.page.scss';
import LandingStepComponent, { LandingStepProps } from '../../components/landing-step/landing-step.component';

const landingSteps: Partial<LandingStepProps>[] = [
    {
        header:"Sign up",
        description: "Lorem ipsum dolor sit amet. Rem repellendus nobis et minus itaque ea esse exercitationem nam omnis sapiente. Non omnis architecto aut impedit sunt hic tempora velit id modi corporis!",
        additionalClass: "yellow"
    },
    {
        header:"Sign in",
        description: "Lorem ipsum dolor sit amet. Rem repellendus nobis et minus itaque ea esse exercitationem nam omnis sapiente. Non omnis architecto aut impedit sunt hic tempora velit id modi corporis!",
        additionalClass: "orange"
    },
    {
        header:"Use it",
        description: "Lorem ipsum dolor sit amet. Rem repellendus nobis et minus itaque ea esse exercitationem nam omnis sapiente. Non omnis architecto aut impedit sunt hic tempora velit id modi corporis!",
        additionalClass: "red"
    }
]

export default function Landing(){
  

    const stepsComponents = [];
    for(let i = 0; i < landingSteps.length ; i++){
        stepsComponents.push(<LandingStepComponent 
                                index={i+1} 
                                description={landingSteps[i].description as string}
                                header={landingSteps[i].header as string}
                                additionalClass={landingSteps[i].additionalClass as string}/>)
                        
    }

    return (
        <>
            <div className="landing-container">
                <div className='landing-form'> form </div>
                <div className='landing-form pattern'>
                    { stepsComponents }
                </div>
            </div>
        </>
    )
}