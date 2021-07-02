import firebase from 'firebase';
import { useMutation, useQueryClient } from 'react-query';
import { firebaseAuth } from '../firebaseConfig';
import { EmailCredential } from '../interfaces/authentication';

export const useSignInWithEmailAndPassword = () => {
  const queryClient = useQueryClient();

  return useMutation<firebase.auth.UserCredential, firebase.auth.Error, EmailCredential>(
    (req) => {
      return firebaseAuth.signInWithEmailAndPassword(req.email, req.password);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('currentUser').catch((err) => console.error(err));
      },
    }
  );
};

export const useSignOut = () => {
  const queryClient = useQueryClient();

  return useMutation(() => firebaseAuth.signOut(), {
    onSuccess: () => {
      queryClient.invalidateQueries('currentUser').catch((err) => console.error(err));
    },
  });
};

export const useSignupWithEmailAndPassword = () => {
  const queryClient = useQueryClient();

  return useMutation<firebase.auth.UserCredential, firebase.auth.Error, EmailCredential>(
    (req) => {
      return firebaseAuth.createUserWithEmailAndPassword(req.email, req.password);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('currentUser').catch((err) => console.error(err));
      },
    }
  );
};
