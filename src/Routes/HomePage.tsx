
import { Menubar } from 'primereact/menubar';
import {NavigateFunction, Outlet, useNavigate} from 'react-router-dom';
import {css } from "@emotion/react"

const HomePage = () => {
  const nav : NavigateFunction = useNavigate();

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => nav("/")
    },
    {
      label: 'Formik',
      icon: 'pi pi-fw pi-pencil',
      command: () => nav("/formik")
    },
    {
      label: 'React Final Form',
      icon: 'pi pi-fw pi-pencil',
      command: () => nav("/react-final-form")
    },
    {
      label: 'React Hook Form',
      icon: 'pi pi-fw pi-pencil',
      command: () => nav('/react-hook-form')
    }
  ];

  return (
    <div css={css` width: 100%`} >
      <Menubar model={items} />
      <Outlet />
    </div>
  );
}

export default HomePage;
