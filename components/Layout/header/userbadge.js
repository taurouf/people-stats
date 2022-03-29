import { useState } from "react";
import { DateTime } from "luxon";

//Redux
import { logout } from "../../../redux/slices/auth";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";

//Icons
import ChevronDown from "../../tools/icons/chevronDown";
import ChevronUp from "../../tools/icons/chevronUp";
import ArrowOut from "../../tools/icons/arrowOut";

const UserBadge = () => {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((e) => e);

  const [isOpen, setIsOpen] = useState(false);
  let date = DateTime.local();
  const signOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="block lg:hidden ml-6" />
      <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
        <div className="relative p-1 flex items-center w-full space-x-4 justify-end">
          <div className="flex p-2 items-center rounded-full text-gray-400  bg-white shadow text-md">
            {DateTime.now().setLocale("fr").toFormat("MMMM dd, yyyy  hh:mm")}
          </div>

          <span className="w-1 h-8 rounded-lg bg-gray-200" />
          <div className="block relative">
            <img
              referrerPolicy="no-referrer"
              alt="profil"
              src={auth.user.photoURL}
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </div>
          <div
            className="relative inline-block text-left"
            onClick={() => setIsOpen(!isOpen)}
          >
            <button className="flex items-center text-gray-500 dark:text-white text-md">
              {auth.user.first} {auth.user.last}
              <div className="ml-2">
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>
            {isOpen && (
              <div
                className="origin-top-right absolute right-0 mt-5 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                onClick={() => signOut()}
              >
                <div className="py-1 cursor-pointer">
                  <div className="flex items-center justify-start px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600">
                    <ArrowOut size={15} />
                    <span className="ml-2">
                      <span>Logout</span>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBadge;
