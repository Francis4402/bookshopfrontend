import { useState } from 'react';
import { Button, Modal } from 'antd';
import FForm from '../../components/form/FForm';
import FInput from '../../components/form/FInput';
import { FieldValues } from 'react-hook-form';

interface DrawerSliderProps {
  trigger?: React.ReactNode;
}

const Login: React.FC<DrawerSliderProps> = ({trigger}) => {
  const [modal2Open, setModal2Open] = useState(false);

  const onsubmit = (data: FieldValues) => {
    console.log(data);
  }


  return (
    <div>
      <Button type="text" onClick={() => setModal2Open(true)}>
        {trigger}
      </Button>
      
        <Modal
          title="Login to your account"
          style={{textAlign: "center"}}
          centered
          open={modal2Open}
          footer={null}
          onCancel={() => setModal2Open(false)}
        >
          <FForm onSubmit={onsubmit}>
            <FInput type="text" name="email" label={"Email"} placeholder={"Enter your email"} />
            <FInput type="password" name="password" label={"Password"} placeholder={"Enter your password"} />
            <div style={{ textAlign: "right", marginTop: "20px" }}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </div>
          </FForm>
        </Modal>
      
    </div>
  )
}

export default Login