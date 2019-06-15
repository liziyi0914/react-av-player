import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import { Video,Audio } from 'src/'

describe('Video', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a video', () => {
    render(<Video/>, node, () => {
		expect(node.innerHTML).toContain('Video Component')
	})
  })
})

describe('Audio', () => {
	let node
	
	beforeEach(() => {
		node = document.createElement('div')
	})
	
	afterEach(() => {
		unmountComponentAtNode(node)
	})
	
	it('displays a audio', () => {
		render(<Audio/>, node, () => {
			expect(node.innerHTML).toContain('Audio Component')
		})
	})
})
