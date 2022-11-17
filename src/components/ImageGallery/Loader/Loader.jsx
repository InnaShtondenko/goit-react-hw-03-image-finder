import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled'; 

export const Loader = () => (
  <LoaderContainer>
    <ThreeDots
      height="40"
      width="80"
      radius="9"
      color="#fff700"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </LoaderContainer>
);
