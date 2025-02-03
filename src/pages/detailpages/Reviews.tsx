import { Button, Rate } from "antd"
import FForm from "../../components/form/FForm"
import { FieldValues, SubmitHandler } from "react-hook-form"
import FTextArea from "../../components/form/FTextArea"
import FInput from "../../components/form/FInput"


const Reviews = () => {

    const handleReview: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    }

  return (
    <div className="flex flex-col justify-center items-center gap-5 max-w-2xl mx-auto">
        <p></p>
        <div className="flex md:flex-row flex-col gap-5 justify-between items-center w-full">
            <p className="text-xl text-gray-500">Be the first to review "Winter Darkest Tragedy"</p>
            <Rate/>
        </div>
        <FForm onSubmit={handleReview}>
            <FTextArea name="review" label="Review" rows={4} placeholder="Enter your review description" />
            <FInput type="email" name="email" label="Email" placeholder="Enter your email" />
            <Button htmlType="submit" type="primary" size="large">Submit</Button>
        </FForm>
    </div>
  )
}

export default Reviews