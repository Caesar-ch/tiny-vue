import type { ComputedRef, ExtractPropTypes } from 'vue'
import type { linkProps } from '@/link/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export type ILinkProps = ExtractPropTypes<typeof linkProps>

export interface ILinkState {
  formDisabled: ComputedRef<boolean>
  disabled: ComputedRef<boolean>
}

export interface ILinkApi {
  state: ILinkState
  handleClick: (event: MouseEvent) => void
}
export type ILinkRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  api: ILinkApi
  state: ILinkState
  props: ILinkProps
}

export type ILinkRenderlessParamUtils = ISharedRenderlessParamUtils<never>
