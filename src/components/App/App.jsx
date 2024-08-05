import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../LayOut/LayOut";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

// import { useEffect } from "react";

// import SearchBox from "../SearchBox/SearchBox";
// import { fetchContacts } from "../../redux/contacts/operations";
// import { useDispatch } from "react-redux";
// // import { selectError, selectLoading } from "../../redux/contacts/selectors";
// import { refresh } from "../../redux/auth/operations";

// // import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
// // import css from "./App.module.css";
// import Navigation from "../Navigation/Navigation";
// import { Routes, Route } from "react-router-dom";
// import UserMenu from "../UserMenu/UserMenu";

// const App = () => {
// const isUser = useSelector(selectUser);
// const isLoding = useSelector(selectLoading);
// const isError = useSelector(selectError);
// const isLoggedIn = useSelector(selectIsLoggedIn);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//   useEffect(() => {
//     dispatch(refresh());
//   }, [dispatch]);

//   return (
//     <div>
//       <Navigation />
//       <UserMenu />
//       {/* <h1>Phonebook</h1> */}
//       {/* {isLoding && <p>Loading contact...</p>} */}
//       {/* {isError && <p>Error massage</p>} */}
//       {/* <ContactForm /> */}
//       {/* <SearchBox /> */}
//       {/* <ContactList /> */}
//       {/* <RegistrationForm /> */}
//       {/* <LoginForm /> */}
//       <Routes>
//         <Route
//           path="/"
//           element={((<ContactForm />), (<SearchBox />), (<ContactList />))}
//         />
//         <Route path="/register" element={<RegistrationForm />} />
//         <Route path="/login" element={<LoginForm />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
