import React from 'react';

import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import { FiAtSign } from 'react-icons/fi';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';

import { useStore } from '../../../store';
import { button, form, formComp } from '../PersonalDetailsForm/style';
import { pageAnimation } from '../../../animations';

export default function Username() {
  const initialValues = useStore((state) => state.userReg.data);
  const updateValues = useStore((state) => state.updateRegValues);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
    }),
    onSubmit: () => {},
  });

  return (
    <motion.form
      variants={pageAnimation}
      exit='exit'
      animate='animate'
      initial='initial'
      transition={pageAnimation.transition}
      style={form}
    >
      <Box sx={{ display: 'grid', gap: '1rem' }}>
        <InputLabel htmlFor='username'>Choose your username</InputLabel>
        <FormControl fullWidth variant='contained'>
          <OutlinedInput
            id='username'
            error={formik.errors.username && true}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            startAdornment={
              <InputAdornment position='start'>
                <FiAtSign />
              </InputAdornment>
            }
          />

          {formik.errors.username && (
            <FormHelperText>{formik.errors.username}</FormHelperText>
          )}
        </FormControl>

        <Button
          variant='contained'
          type='submit'
          sx={button}
          disabled={
            Object.values(formik.errors).length !== 0 &&
            Object.values(formik.values).length !== 0
              ? true
              : false
          }
        >
          Continue
        </Button>
      </Box>
    </motion.form>
  );
}
