import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Navigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

import * as S from './styles'

import Button from '../Button'

import { usePurchaseMutation } from '../../services/api'
import { close, clear } from '../../store/reducers/Cart'

type Props = {
  setInCheckout: (value: boolean) => void
}

const Checkout = ({ setInCheckout }: Props) => {
  const [continueWithPayment, setContinueWithPayment] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      fullName: '',
      addressDelivery: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      addressDelivery: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O campo precisa ter pelo menos 8 caracteres')
        .max(9, 'O campo precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O campo precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string().min(
        5,
        'O campo precisa ter pelo menos 5 caracteres'
      ),
      // dados de pagamento
      cardDisplayName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O campo precisa ter 3 caracteres')
        .max(3, 'O campo precisa ter 3 caracteres')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(1, 'O campo precisa ter no minimo 1 caracteres')
        .max(2, 'O campo precisa ter no maximo 2 caracteres')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O campo precisa ter 2 caracteres')
        .max(2, 'O campo precisa ter 2 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.addressDelivery,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const completeOrder = () => {
    setInCheckout(false)
    setContinueWithPayment(false)
    dispatch(close())
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && !isSuccess) {
    dispatch(close())
    return <Navigate to="/" />
  }

  return (
    <S.ContentCheckout>
      {isSuccess && data ? (
        <>
          <h3>Pedido realizado - {data.orderId}</h3>
          <div className="text-confirmed">
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p className="margin-top">
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p className="margin-top">
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p className="margin-top">
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </div>
          <Button
            title="Clique para concluir"
            type="button"
            onClick={completeOrder}
          >
            Concluir
          </Button>
        </>
      ) : (
        <form onSubmit={form.handleSubmit}>
          {continueWithPayment ? (
            <>
              <S.InputGroup className="margin-top">
                <label htmlFor="cardDisplayName">Nome no cartão</label>
                <input
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  id="cardDisplayName"
                  name="cardDisplayName"
                  value={form.values.cardDisplayName}
                  className={
                    checkInputHasError('cardDisplayName') ? 'error' : ''
                  }
                />
              </S.InputGroup>
              <S.Row className="margin-top">
                <S.InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    type="text"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </S.InputGroup>
                <S.InputGroup maxwidth="88px">
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    type="text"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="cardCode"
                    name="cardCode"
                    value={form.values.cardCode}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                    mask="999"
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row className="margin-top">
                <S.InputGroup>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <InputMask
                    type="text"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="expiresMonth"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                    mask="99"
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <InputMask
                    type="text"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="expiresYear"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                    mask="99"
                  />
                </S.InputGroup>
              </S.Row>
              <S.ContainerBtn>
                <Button
                  title="Clique aqui para continuar com o pagamento"
                  type="submit"
                  onClick={form.handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? 'Finalizando...' : 'Finalizar compra'}
                </Button>
                <Button
                  title="Clique aqui para voltar ao seu carrinho"
                  type="button"
                  onClick={() => {
                    setInCheckout(true)
                    setContinueWithPayment(false)
                  }}
                  disabled={isLoading}
                >
                  Voltar para a edição de endereço
                </Button>
              </S.ContainerBtn>
            </>
          ) : (
            <>
              <h3>Entrega</h3>
              <S.InputGroup className="margin-top">
                <label htmlFor="fullName">Quem irá receber</label>
                <input
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  id="fullName"
                  name="fullName"
                  value={form.values.fullName}
                  className={checkInputHasError('fullName') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup className="margin-top">
                <label htmlFor="addressDelivery">Endereço</label>
                <input
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  id="addressDelivery"
                  name="addressDelivery"
                  value={form.values.addressDelivery}
                  className={
                    checkInputHasError('addressDelivery') ? 'error' : ''
                  }
                />
              </S.InputGroup>
              <S.InputGroup className="margin-top">
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  id="city"
                  name="city"
                  value={form.values.city}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.Row className="margin-top">
                <S.InputGroup>
                  <label htmlFor="cep">CEP</label>
                  <InputMask
                    type="text"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="cep"
                    name="cep"
                    value={form.values.cep}
                    className={checkInputHasError('cep') ? 'error' : ''}
                    mask="99999-999"
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="number">Número</label>
                  <input
                    type="text"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="number"
                    name="number"
                    value={form.values.number}
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.InputGroup className="margin-top">
                <label htmlFor="complement">
                  Complemento &#40;Opcinal&#41;
                </label>
                <input
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  id="complement"
                  name="complement"
                  value={form.values.complement}
                  className={checkInputHasError('complement') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.ContainerBtn>
                <Button
                  title="Clique aqui para continuar com o pagamento"
                  type="button"
                  onClick={() => setContinueWithPayment(true)}
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  title="Clique aqui para voltar ao seu carrinho"
                  type="button"
                  onClick={() => setInCheckout(false)}
                >
                  Voltar para o carrinho
                </Button>
              </S.ContainerBtn>
            </>
          )}
        </form>
      )}
    </S.ContentCheckout>
  )
}

export default Checkout
