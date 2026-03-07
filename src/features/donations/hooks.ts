import { useMutation } from '@tanstack/react-query';
import { submitDonation } from './api';

export function useSubmitDonation() {
  return useMutation({
    mutationFn: submitDonation,
  });
}
