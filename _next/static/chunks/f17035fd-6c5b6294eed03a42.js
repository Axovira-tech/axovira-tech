"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8539],{2838:(e,t,i)=>{var a,n,r,o,s,l,d,h,u,c,m,p,v,b,g,E,f,k,A,y,T,w,S,I,x,L,C,M,_,R,D,B,N,P,O,W,H,U,V,Z,K,$,Y,q,F,G,j,z,Q,J,X,ee,et,ei,ea,en,er,eo,es,el,ed,eh,eu,ec,em,ep,ev,eb,eg,eE,ef,ek,eA,ey,eT,ew,eS,eI,ex,eL,eC,eM,e_,eR,eD,eB,eN,eP,eO,eW,eH,eU,eV,eZ,eK,e$,eY,eq,eF,eG,ej,ez,eQ,eJ,eX,e0,e1,e2,e5,e4,e3,e7,e6,e8,e9,te,tt,ti,ta,tn=e=>{throw TypeError(e)},tr=(e,t,i)=>t.has(e)||tn("Cannot "+i),to=`<!-- prettier-ignore -->
<template id="media-theme-classic">
  <style>
    :host {
      --_primary-color: var(--media-primary-color, white);
      --_secondary-color: var(--media-secondary-color, rgb(0 0 0 / .75));
      --media-icon-color: var(--_primary-color);
      --media-range-thumb-background: var(--_primary-color);
      --media-range-bar-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_secondary-color);
      --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
      --media-range-track-background:
        linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        linear-gradient(rgba(20, 20, 30, 0.7), rgba(20, 20, 30, 0.7));
      --media-preview-thumbnail-border: 0;
      --media-preview-thumbnail-border-radius: 2px 2px 0 0;
      --media-preview-time-border-radius: 0 0 2px 2px;
      --media-preview-time-text-shadow: none;
      --media-menu-border-radius: 2px;
      --media-menu-transform-in: translateY(-8px) scale(1);
      --media-menu-transform-out: translateY(-6px) scale(.99);
      --media-menu-item-hover-background: rgba(255, 255, 255, 0.28);
      --media-tooltip-display: none;
      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    media-rendition-menu,
    media-audio-track-menu,
    media-captions-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
    }

    :host([audio]) {
      --media-preview-time-border-radius: 3px;
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
    }

    [disabled]:not(media-live-button),
    [aria-disabled='true']:not(media-live-button) {
      opacity: 60%;
      cursor: not-allowed;
    }

    /* 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast. */
    media-controller {
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused],:not([userinactive])) {
      /* 42px is the height of the control bar and progress bar
       * with an additional 5px as a buffer, to get 47px */
      --media-webkit-text-track-transform: translateY(-47px);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
     @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    :host media-time-range {
      color: var(--_primary-color);
      --media-range-thumb-opacity: 0;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar {
      --media-control-padding: 4px 3px;
    }

    [breakpointsm] media-control-bar {
      --media-control-padding: 9px 5px;
    }

    [breakpointmd] media-control-bar {
      --media-control-padding: 9px 7px;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is(media-text-display, media-time-display):first-child {
      --media-control-padding: 9px 5px 9px 10px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    /* Add a small space on the right to have the play button and
     * fullscreen button aligned in relation to the progress bar. */
    media-control-bar:not([slot])::after {
      content: '';
      width: 2px;
      height: 100%;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(160px, 25%);
      background: linear-gradient(rgb(0 0 0 / 0.4), transparent);
    }

    media-control-bar[slot='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow: 0 0 2px rgb(0 0 0 / 0.25), 0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      width: max(43px, min(10%, 55px));
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 2%;
      width: max(33px, min(8%, 40px));
    }

    media-control-bar:not([slot]) media-seek-backward-button {
      padding-right: 5px;
    }

    media-control-bar:not([slot]) media-seek-forward-button {
      padding-left: 5px;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      /* Adding px is required here for calc() */
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      width: min(100%, 100px);
    }

    media-time-display {
      white-space: nowrap;
    }

    :is(media-time-display, media-text-display, media-playback-rate-button[role='button']) {
      color: inherit;
      line-height: 24px;
    }

    :is(.title-display, media-live-button) {
      color: inherit;
      font-size: 16px;
      text-shadow: 0 0 2px rgb(0 0 0 / 0.6);
    }

    :host([audio]) .title-display {
      flex-grow: 1;
      font-size: 21px;
    }
  </style>

  <template partial="TitleDisplay">
    <template if="title">
      <media-text-display part="top title display" class="title-display">
        {{title}}
      </media-text-display>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="play">
        <path d="m6.73 20.93 14.05-8.54a.46.46 0 0 0 0-.78L6.73 3.07a.48.48 0 0 0-.73.39v17.07a.48.48 0 0 0 .73.4Z" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="pause">
        <path
          d="M6 19.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v15ZM14.5 4a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 22 24" slot="backward">
        <path d="M11 6V3L5.37 7 11 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 11 6Z" />
        <text class="value" transform="translate(2.5 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 22 24" slot="forward">
        <path d="M11 6V3l5.61 4L11 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 11 6Z" />
        <text class="value" transform="translate(10 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
          {{forwardseekoffset}}
        </text>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="high">
        <path
          d="m11.14 4.86-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.21a.5.5 0 0 0-.86-.35Zm2.74-1.56v1.52A7.52 7.52 0 0 1 19.47 12a7.52 7.52 0 0 1-5.59 7.18v1.52A9 9 0 0 0 21 12a9 9 0 0 0-7.12-8.7Zm3.56 8.7a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="low">
        <path
          d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="medium">
        <path
          d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="off">
        <path
          d="m3 4.05 4.48 4.47-.33.33a.49.49 0 0 1-.36.15H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.48.48 0 0 0 .36.15.5.5 0 0 0 .5-.5v-5.75l4.67 4.66a7.71 7.71 0 0 1-2.79 1.47v1.52a9.32 9.32 0 0 0 3.87-1.91L20 21l1-1L4.06 3 3 4.05Zm5.36 5.36 2.39 2.39V17L8 14.26a1.74 1.74 0 0 0-1.24-.51H4.25v-3.5h2.54A1.74 1.74 0 0 0 8 9.74l.36-.33ZM19.47 12a7.19 7.19 0 0 1-.89 3.47l1.11 1.1A8.64 8.64 0 0 0 21 12a9 9 0 0 0-7.12-8.7v1.52A7.52 7.52 0 0 1 19.47 12ZM12 8.88V5.21a.5.5 0 0 0-.5-.5.48.48 0 0 0-.36.15L9.56 6.44 12 8.88ZM15.91 12a4.284 4.284 0 0 1-.07.72l1.22 1.22a5.2 5.2 0 0 0 .38-1.94 5.49 5.49 0 0 0-3.56-5.1v1.66A4 4 0 0 1 15.91 12Z"
        />
      </svg>
    </media-mute-button>
  </template>

  <template partial="RenditionSelect">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 24">
        <path
          d="M2.25 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="header">Quality</div>
    </media-rendition-menu>
  </template>

  <template partial="AudioTrackSelect">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 24 24">
        <path d="M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0 1.5C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z"/>
        <path d="M7.25 9.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3-3a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75Zm3 2a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Zm3-1a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75Z"/>
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="header">Audio</div>
    </media-audio-track-menu>
  </template>

  <template partial="CaptionsSelect">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="on">
        <path d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.41 10.1a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 4 4 0 0 1-1.28-.83 3.67 3.67 0 0 1-.84-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.53 3.53 0 0 1 .84-1.21 3.89 3.89 0 0 1 1.29-.8 4.76 4.76 0 0 1 1.63-.27 4.06 4.06 0 0 1 1.35.24c.225.091.44.205.64.34a2.7 2.7 0 0 1 .55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.35 2.35 0 0 0-.46.77 2.78 2.78 0 0 0-.16 1c-.009.34.046.68.16 1 .104.283.26.545.46.77.188.21.415.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.88 2.88 0 0 1-1.22 1.01Zm7.52 0a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 3.89 3.89 0 0 1-1.28-.83 3.55 3.55 0 0 1-.85-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.43 3.43 0 0 1 .85-1.25 3.75 3.75 0 0 1 1.28-.8 4.76 4.76 0 0 1 1.63-.27 4 4 0 0 1 1.35.24c.225.091.44.205.64.34.21.144.395.32.55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.352 2.352 0 0 0-.46.77 3.01 3.01 0 0 0-.16 1c-.003.34.05.678.16 1 .108.282.263.542.46.77.188.21.416.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.82 2.82 0 0 1-1.21 1.05Z"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="off">
        <path d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-1.81-.12-4.67-.18-7.53-.18-2.86 0-5.72.06-7.53.18a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c1.81.12 4.67.18 7.53.18 2.86 0 5.72-.06 7.53-.18a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.137-.21-8.283 0-12.42a1.11 1.11 0 0 1 .91-1.11c1.67-.11 4.43-.18 7.43-.18s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.137.21 8.283 0 12.42ZM10.843 14a1.55 1.55 0 0 1-.76.18 1.57 1.57 0 0 1-.71-.18 1.69 1.69 0 0 1-.57-.42 2.099 2.099 0 0 1-.38-.58 2.47 2.47 0 0 1 0-1.64 2 2 0 0 1 .39-.66 1.73 1.73 0 0 1 .58-.42c.23-.103.479-.158.73-.16.241-.004.48.044.7.14.199.088.373.222.51.39l1.08-.89a2.179 2.179 0 0 0-.47-.44 2.81 2.81 0 0 0-.54-.32 2.91 2.91 0 0 0-.58-.15 2.71 2.71 0 0 0-.56 0 4.08 4.08 0 0 0-1.38.15 3.27 3.27 0 0 0-1.09.67 3.14 3.14 0 0 0-.71 1.06 3.62 3.62 0 0 0-.26 1.39 3.57 3.57 0 0 0 .26 1.38 3 3 0 0 0 .71 1.06c.316.293.687.52 1.09.67.443.16.91.238 1.38.23a3.2 3.2 0 0 0 1.28-.27c.401-.183.747-.47 1-.83l-1.17-.88a1.42 1.42 0 0 1-.53.52Zm6.62 0a1.58 1.58 0 0 1-.76.18 1.54 1.54 0 0 1-.7-.18 1.69 1.69 0 0 1-.57-.42 2.12 2.12 0 0 1-.43-.58 2.29 2.29 0 0 1 .39-2.3 1.84 1.84 0 0 1 1.32-.58c.241-.003.48.045.7.14.199.088.373.222.51.39l1.08-.92a2.43 2.43 0 0 0-.47-.44 3.22 3.22 0 0 0-.53-.29 2.999 2.999 0 0 0-.57-.15 2.87 2.87 0 0 0-.57 0 4.06 4.06 0 0 0-1.36.15 3.17 3.17 0 0 0-1.09.67 3 3 0 0 0-.72 1.06 3.62 3.62 0 0 0-.25 1.39 3.57 3.57 0 0 0 .25 1.38c.16.402.405.764.72 1.06a3.17 3.17 0 0 0 1.09.67c.44.16.904.237 1.37.23.441 0 .877-.092 1.28-.27a2.45 2.45 0 0 0 1-.83l-1.15-.85a1.49 1.49 0 0 1-.54.49Z"/>
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="airplay">
        <path
          d="M13.19 14.22a.25.25 0 0 0-.38 0l-5.46 6.37a.25.25 0 0 0 .19.41h10.92a.25.25 0 0 0 .19-.41l-5.46-6.37Z"
        />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2.94L8 16.75H4.25V4.25h17.5v12.5H18L19.06 18H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
        <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
        <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
        <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
        <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
        <path d="M20.5 5.5h-15v5.811c3.52.906 6.283 3.67 7.189 7.19H20.5V5.5Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
        <path
          d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
        <path
          d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="enter">
        <path
          d="M20.25 14.5a.76.76 0 0 0-.75.75v4.25h-4.25a.75.75 0 1 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5a.76.76 0 0 0-.75-.75Zm0-11.5h-5a.76.76 0 0 0-.75.75.76.76 0 0 0 .75.75h4.25v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75ZM8.75 19.5H4.5v-4.25a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75h5a.75.75 0 1 0 0-1.5Zm0-16.5h-5a.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75.76.76 0 0 0 .75-.75V4.5h4.25a.76.76 0 0 0 .75-.75.76.76 0 0 0-.75-.75Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="exit">
        <path
          d="M20.25 14.5h-5a.76.76 0 0 0-.75.75v5a.75.75 0 1 0 1.5 0V16h4.25a.75.75 0 1 0 0-1.5Zm-5-5h5a.75.75 0 1 0 0-1.5H16V3.75a.75.75 0 1 0-1.5 0v5a.76.76 0 0 0 .75.75Zm-6.5 5h-5a.75.75 0 1 0 0 1.5H8v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75Zm0-11.5a.76.76 0 0 0-.75.75V8H3.75a.75.75 0 0 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5A.76.76 0 0 0 8.75 3Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="LiveButton">
    <media-live-button
      part="{{section ?? 'top'}} live button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-live-button>
  </template>

  <template partial="PlaybackRateButton">
    <media-playback-rate-button
      rates="{{playbackrates}}"
      part="bottom playback-rate button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-button>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range
      part="bottom time range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-range>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:300 md:700"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>
    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
    <media-error-dialog slot="dialog" noautohide></media-error-dialog>

    <template if="audio">

      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          {{>SeekBackwardButton}}
          {{>SeekForwardButton}}
          {{>TimeDisplay}}
          {{>TimeRange}}
          {{>MuteButton}}
          {{>VolumeRange}}
          {{>PlaybackRateButton}}
          {{>AudioTrackSelect}}
          {{>AirplayButton}}
          {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">

        <template if="targetlivewindow > 0">
          <template if="title">
            <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
          </template>
          <media-control-bar part="control-bar bottom">
            {{>PlayButton}}
            {{>LiveButton section="bottom"}}
            {{>SeekBackwardButton}}
            {{>SeekForwardButton}}
            {{>TimeDisplay}}
            {{>TimeRange}}
            {{>MuteButton}}
            {{>VolumeRange}}
            {{>PlaybackRateButton}}
            {{>AudioTrackSelect}}
            {{>AirplayButton}}
            {{>CastButton}}
          </media-control-bar>
        </template>

        <template if="!targetlivewindow">
          <template if="title">
            <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
          </template>
          <media-control-bar part="control-bar bottom">
            {{>PlayButton}}
            {{>LiveButton section="bottom"}}
            {{>MuteButton}}
            {{>VolumeRange}}
            <div class="spacer"></div>
            {{>AudioTrackSelect}}
            {{>AirplayButton}}
            {{>CastButton}}
          </media-control-bar>
        </template>

      </template>
    </template>

    <template if="!audio">

      <template if="streamtype == 'on-demand'">

        <template if="!breakpointsm">
          {{>TimeRange}}
          <media-control-bar part="control-bar bottom">
            {{>PlayButton}}
            {{>MuteButton}}
            <div class="spacer"></div>
            {{>CaptionsSelect}}
            {{>FullscreenButton}}
          </media-control-bar>
        </template>

        <template if="breakpointsm">
          <template if="!breakpointmd">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>SeekBackwardButton section="center"}}
              {{>PlayButton section="center"}}
              {{>SeekForwardButton section="center"}}
            </div>
            {{>TimeRange}}
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>TimeDisplay}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>RenditionSelect}}
              {{>PlaybackRateButton}}
              {{>AudioTrackSelect}}
              {{>CaptionsSelect}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>
        </template>

        <template if="breakpointmd">
          <media-control-bar part="control-bar top" slot="top-chrome">
            {{>TitleDisplay}}
          </media-control-bar>
          <div slot="centered-chrome" class="center-controls">
            {{>PlayButton section="center"}}
          </div>
          {{>TimeRange}}
          <media-control-bar part="control-bar bottom">
            {{>PlayButton}}
            {{>SeekBackwardButton}}
            {{>SeekForwardButton}}
            {{>TimeDisplay}}
            {{>MuteButton}}
            {{>VolumeRange}}
            <div class="spacer"></div>
            {{>RenditionSelect}}
            {{>PlaybackRateButton}}
            {{>AudioTrackSelect}}
            {{>CaptionsSelect}}
            {{>AirplayButton}}
            {{>CastButton}}
            {{>PipButton}}
            {{>FullscreenButton}}
          </media-control-bar>
        </template>

      </template>

      <template if="streamtype == 'live'">

        <template if="!targetlivewindow">

          <template if="!breakpointsm">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>LiveButton}}
            </media-control-bar>
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>MuteButton}}
              <div class="spacer"></div>
              {{>CaptionsSelect}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

          <template if="breakpointsm">
            <template if="!breakpointmd">
              <media-control-bar part="control-bar top" slot="top-chrome">
                {{>LiveButton}}
                {{>TitleDisplay}}
              </media-control-bar>
              <div slot="centered-chrome" class="center-controls">
                {{>PlayButton section="center"}}
              </div>
              <media-control-bar part="control-bar bottom">
                {{>PlayButton}}
                {{>MuteButton}}
                {{>VolumeRange}}
                <div class="spacer"></div>
                {{>RenditionSelect}}
                {{>AudioTrackSelect}}
                {{>CaptionsSelect}}
                {{>AirplayButton}}
                {{>CastButton}}
                {{>PipButton}}
                {{>FullscreenButton}}
              </media-control-bar>
            </template>
          </template>

          <template if="breakpointmd">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>LiveButton}}
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>PlayButton section="center"}}
            </div>
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>RenditionSelect}}
              {{>AudioTrackSelect}}
              {{>CaptionsSelect}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>
        </template>

        <template if="targetlivewindow > 0">

          <template if="!breakpointsm">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>LiveButton}}
            </media-control-bar>
            {{>TimeRange}}
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>MuteButton}}
              <div class="spacer"></div>
              {{>CaptionsSelect}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

          <template if="breakpointsm">
            <template if="!breakpointmd">
              <media-control-bar part="control-bar top" slot="top-chrome">
                {{>LiveButton}}
                {{>TitleDisplay}}
              </media-control-bar>
              <div slot="centered-chrome" class="center-controls">
                {{>SeekBackwardButton section="center"}}
                {{>PlayButton section="center"}}
                {{>SeekForwardButton section="center"}}
              </div>
              {{>TimeRange}}
              <media-control-bar part="control-bar bottom">
                {{>PlayButton}}
                {{>MuteButton}}
                {{>VolumeRange}}
                <div class="spacer"></div>
                {{>RenditionSelect}}
                {{>AudioTrackSelect}}
                {{>CaptionsSelect}}
                {{>AirplayButton}}
                {{>CastButton}}
                {{>PipButton}}
                {{>FullscreenButton}}
              </media-control-bar>
            </template>
          </template>

          <template if="breakpointmd">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>LiveButton}}
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>PlayButton section="center"}}
            </div>
            {{>TimeRange}}
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>SeekBackwardButton}}
              {{>SeekForwardButton}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>RenditionSelect}}
              {{>AudioTrackSelect}}
              {{>CaptionsSelect}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

        </template>

      </template>

    </template>

    <slot></slot>

  </media-controller>
</template>
`,ts=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends ts{}globalThis.DocumentFragment=e}var tl=class extends ts{},td=class{constructor(e,t={}){((e,t,i)=>t.has(e)?tn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i))(this,a),((e,t,i,a)=>(tr(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,a,null==t?void 0:t.detail)}get detail(){let e,t;return tr(this,e=a,"read from private field"),t?t.call(this):e.get(this)}initCustomEvent(){}};a=new WeakMap;var th={document:{createElement:function(e,t){return new tl}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(tl)},CustomEvent:td,EventTarget:ts,HTMLElement:tl,HTMLVideoElement:class extends ts{}},tu="undefined"==typeof window||void 0===globalThis.customElements,tc=tu?th:globalThis,tm=tu?th.document:globalThis.document,tp={MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest"},tv={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},tb=Object.entries({MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"}),tg=tb.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),tE=tb.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(tE).reduce((e,[t,i])=>{let a=tg[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"}),Object.entries(tg).reduce((e,[t,i])=>{let a=tE[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"});var tf={SUBTITLES:"subtitles",CAPTIONS:"captions"};function tk(e){var t;return null!=(t=tA(e))?t:tT(e,"media-controller")}function tA(e){var t;let{MEDIA_CONTROLLER:i}=tv,a=e.getAttribute(i);if(a)return null==(t=tw(e))?void 0:t.getElementById(a)}var ty=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||ty(e,t.getRootNode().host)),tT=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||tT(e.getRootNode().host,t)};function tw(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function tS(e,t){let i=function(e,t){var i,a;let n;for(n of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=n.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||tI(e,t)}function tI(e,t){var i,a;let n=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],r=null==n?void 0:n[n.length-1];return(null==r?void 0:r.sheet)?(null==r||r.sheet.insertRule(`${t}{}`,r.sheet.cssRules.length),null==(a=r.sheet.cssRules)?void 0:a[r.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function tx(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function tL(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}tx(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function tC(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function tM(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;tC(e,t,void 0)!==a&&e.setAttribute(t,a)}var t_=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},tR=class extends t_{},tD=class extends tR{constructor(){super(...arguments),this.role=null}},tB={createElement:function(){return new tN.HTMLElement},createElementNS:function(){return new tN.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},tN={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:tB,Node:tR,Element:tD,HTMLElement:class extends tD{constructor(){super(...arguments),this.innerHTML=""}get content(){return new tN.DocumentFragment}},DocumentFragment:class extends t_{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e})},tP="undefined"==typeof window||void 0===window.customElements,tO=Object.keys(tN).every(e=>e in globalThis),tW=tP&&!tO?tN:globalThis,tH=tP&&!tO?tB:globalThis.document,tU=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tV=(e,t,i)=>(tU(e,t,"read from private field"),i?i.call(e):t.get(e)),tZ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tK=(e,t,i,a)=>(tU(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),t$={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof tJ&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof tJ?a.element[a.attributeName]=t:a.value=t}}}},tY=class extends tW.DocumentFragment{constructor(e,t,i=t$){var a;super(),tZ(this,n,void 0),tZ(this,r,void 0),this.append(e.content.cloneNode(!0)),tK(this,n,tq(this)),tK(this,r,i),null==(a=i.createCallback)||a.call(i,this,tV(this,n),t),i.processCallback(this,tV(this,n),t)}update(e){tV(this,r).processCallback(this,tV(this,n),e)}};n=new WeakMap,r=new WeakMap;var tq=(e,t=[])=>{let i,a;for(let n of e.attributes||[])if(n.value.includes("{{")){let r=new tQ;for([i,a]of tG(n.value))if(i){let i=new tJ(e,n.name,n.namespaceURI);r.append(i),t.push([a,i])}else r.append(a);n.value=r.toString()}for(let n of e.childNodes)if(1!==n.nodeType||n instanceof HTMLTemplateElement){let r=n.data;if(1===n.nodeType||r.includes("{{")){let o=[];if(r)for([i,a]of tG(r))if(i){let i=new tX(e);o.push(i),t.push([a,i])}else o.push(new Text(a));else if(n instanceof HTMLTemplateElement){let i=new t0(e,n);o.push(i),t.push([i.expression,i])}n.replaceWith(...o.flatMap(e=>e.replacementNodes||[e]))}}else tq(n,t);return t},tF={},tG=e=>{let t="",i=0,a=tF[e],n=0,r;if(a)return a;for(a=[];r=e[n];n++)"{"===r&&"{"===e[n+1]&&"\\"!==e[n-1]&&e[n+2]&&1==++i?(t&&a.push([0,t]),t="",n++):"}"!==r||"}"!==e[n+1]||"\\"===e[n-1]||--i?t+=r||"":(a.push([1,t.trim()]),t="",n++);return t&&a.push([0,(i>0?"{{":"")+t]),tF[e]=a},tj=class{get value(){return""}set value(e){}toString(){return this.value}},tz=new WeakMap,tQ=class{constructor(){tZ(this,o,[])}[Symbol.iterator](){return tV(this,o).values()}get length(){return tV(this,o).length}item(e){return tV(this,o)[e]}append(...e){for(let t of e)t instanceof tJ&&tz.set(t,this),tV(this,o).push(t)}toString(){return tV(this,o).join("")}};o=new WeakMap;var tJ=class extends tj{constructor(e,t,i){super(),tZ(this,u),tZ(this,s,""),tZ(this,l,void 0),tZ(this,d,void 0),tZ(this,h,void 0),tK(this,l,e),tK(this,d,t),tK(this,h,i)}get attributeName(){return tV(this,d)}get attributeNamespace(){return tV(this,h)}get element(){return tV(this,l)}get value(){return tV(this,s)}set value(e){tV(this,s)!==e&&(tK(this,s,e),tV(this,u,c)&&1!==tV(this,u,c).length?tV(this,l).setAttributeNS(tV(this,h),tV(this,d),tV(this,u,c).toString()):null==e?tV(this,l).removeAttributeNS(tV(this,h),tV(this,d)):tV(this,l).setAttributeNS(tV(this,h),tV(this,d),e))}get booleanValue(){return tV(this,l).hasAttributeNS(tV(this,h),tV(this,d))}set booleanValue(e){if(tV(this,u,c)&&1!==tV(this,u,c).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}};s=new WeakMap,l=new WeakMap,d=new WeakMap,h=new WeakMap,u=new WeakSet,c=function(){return tz.get(this)};var tX=class extends tj{constructor(e,t){super(),tZ(this,m,void 0),tZ(this,p,void 0),tK(this,m,e),tK(this,p,t?[...t]:[new Text])}get replacementNodes(){return tV(this,p)}get parentNode(){return tV(this,m)}get nextSibling(){return tV(this,p)[tV(this,p).length-1].nextSibling}get previousSibling(){return tV(this,p)[0].previousSibling}get value(){return tV(this,p).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),tK(this,p,function(e,t,i,a=null){let n=0,r,o,s,l=i.length,d=t.length;for(;n<l&&n<d&&t[n]==i[n];)n++;for(;n<l&&n<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(n==d)for(;n<l;)e.insertBefore(i[n++],a);if(n==l)for(;n<d;)e.removeChild(t[n++]);else{for(r=t[n];n<l;)s=i[n++],o=r?r.nextSibling:a,r==s?r=o:n<l&&i[n]==o?(e.replaceChild(s,r),r=o):e.insertBefore(s,r);for(;r!=a;)o=r.nextSibling,e.removeChild(r),r=o}return i}(tV(this,p)[0].parentNode,tV(this,p),t,this.nextSibling))}};m=new WeakMap,p=new WeakMap;var t0=class extends tX{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}};function t1(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function t2(e){if(e){let[t,i,a,n]=e.split(":");return{id:t,kind:i,language:a,label:n}}}function t5(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}var t4={string:e=>String(e)},t3=class{constructor(e){this.template=e,this.state=void 0}},t7=new WeakMap,t6=new WeakMap,t8={partial:(e,t)=>{t[e.expression]=new t3(e.template)},if:(e,t)=>{var i;if(ii(e.expression,t))if(t7.get(e)!==e.template){t7.set(e,e.template);let i=new tY(e.template,t,ie);e.replace(i),t6.set(e,i)}else null==(i=t6.get(e))||i.update(t);else e.replace(""),t7.delete(e),t6.delete(e)}},t9=Object.keys(t8),ie={processCallback(e,t,i){var a,n;if(i)for(let[e,r]of t){if(r instanceof t0){if(!r.directive){let e=t9.find(e=>r.template.hasAttribute(e));e&&(r.directive=e,r.expression=r.template.getAttribute(e))}null==(a=t8[r.directive])||a.call(t8,r,i);continue}let t=ii(e,i);if(t instanceof t3){t7.get(r)!==t.template?(t7.set(r,t.template),r.value=t=new tY(t.template,t.state,ie),t6.set(r,t)):null==(n=t6.get(r))||n.update(t.state);continue}t?(r instanceof tJ&&r.attributeName.startsWith("aria-")&&(t=String(t)),r instanceof tJ?"boolean"==typeof t?r.booleanValue=t:"function"==typeof t?r.element[r.attributeName]=t:r.value=t:(r.value=t,t7.delete(r),t6.delete(r))):r instanceof tJ?r.value=void 0:(r.value=void 0,t7.delete(r),t6.delete(r))}}},it={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=t4[t])?void 0:i.call(t4,e)}};function ii(e,t={}){var i,a,n,r,o,s,l;let d=(function(e,t){let i,a,n,r=[];for(;e;){for(let r in n=null,i=e.length,t)(a=t[r].exec(e))&&a.index<i&&(n={token:a[0],type:r,matches:a.slice(1)},i=a.index);i&&r.push({token:e.substr(0,i),type:void 0}),n&&r.push(n),e=e.substr(i+(n?n.token.length:0))}return r})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return ia(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return ia(e);let s={...t};i.state=s;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(n=l[e])?void 0:n.token,a=null==(r=l[e+1])?void 0:r.token,d=null==(o=l[e+2])?void 0:o.token;i&&"="===a&&(s[i]=io(d,t))}return i}if(1===d.length)return ir(d[0])?io(d[0].token,t):ia(e);if(2===d.length){let i=it[null==(s=d[0])?void 0:s.token];return i&&ir(d[1])?i(io(d[1].token,t)):ia(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=it[i];if(!a||!ir(d[0])||!ir(d[2]))return ia(e);let n=io(d[0].token,t);return a(n,"|"===i?d[2].token:io(d[2].token,t))}}function ia(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function ir({type:e}){return["number","boolean","string","param"].includes(e)}function io(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):t5(e)?parseFloat(e):t[e]}var is=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},il=(e,t,i)=>(is(e,t,"read from private field"),i?i.call(e):t.get(e)),id=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ih=(e,t,i,a)=>(is(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),iu=(e,t,i)=>(is(e,t,"access private method"),i),ic={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},im=tH.createElement("template");im.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;

      /* Hide theme element until the breakpoints are available to avoid flicker. */
      visibility: hidden;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;var ip=class extends tW.HTMLElement{constructor(){super(),id(this,E),id(this,k),id(this,v,void 0),id(this,b,void 0),id(this,g,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(ic[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(tE.BREAKPOINTS_COMPUTED,this.render),iu(this,E,f).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=il(this,v))?e:this.constructor.template}set template(e){ih(this,g,null),ih(this,v,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>ic[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(let e of a){let t=null!=(i=ic[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(t5(a)&&(a=parseFloat(a)),n[t]=""===a||a):n[t]=!1}return n}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&iu(this,k,A).call(this)}connectedCallback(){iu(this,k,A).call(this)}createRenderer(){this.template&&this.template!==il(this,b)&&(ih(this,b,this.template),this.renderer=new tY(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(im.content.cloneNode(!0),this.renderer))}render(){var e;if(null==(e=this.renderer)||e.update(this.props),this.renderRoot.isConnected){let{style:e}=tS(this.renderRoot,":host");"hidden"===e.visibility&&e.removeProperty("visibility")}}};async function iv(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function ib(e){return e.split("-")[0]}v=new WeakMap,b=new WeakMap,g=new WeakMap,E=new WeakSet,f=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},k=new WeakSet,A=function(){var e;let t=this.getAttribute("template");if(!t||t===il(this,g))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){ih(this,g,t),ih(this,v,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(ih(this,g,t),iv(t).then(e=>{let t=tH.createElement("template");t.innerHTML=e,ih(this,v,t),this.createRenderer()}).catch(console.error))},ip.observedAttributes=["template"],ip.processor=ie,tW.customElements.get("media-theme")||tW.customElements.define("media-theme",ip);var ig=new WeakMap,iE=e=>{let t=ig.get(e);return t||ig.set(e,t=new Set),t},ik=new tW.ResizeObserver(e=>{for(let t of e)for(let e of iE(t.target))e(t)});function iA(e,t){iE(e).add(t),ik.observe(e)}function iy(e,t){let i=iE(e);i.delete(t),i.size||ik.unobserve(e)}var iT=class extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}},iw=class extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}},iS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iI=(e,t,i)=>(iS(e,t,"read from private field"),i?i.call(e):t.get(e)),ix=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iL=(e,t,i,a)=>(iS(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),iC=(e,t,i)=>(iS(e,t,"access private method"),i);function iM({type:e,text:t,value:i,checked:a}){let n=tH.createElement("media-chrome-menu-item");n.type=null!=e?e:"",n.part.add("menu-item"),e&&n.part.add(e),n.value=i,n.checked=a;let r=tH.createElement("span");return r.textContent=t,n.append(r),n}function i_(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}var iR=tH.createElement("template");iR.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-menu-border-radius);
      border: var(--media-menu-border, none);
      display: var(--media-menu-display, inline-flex);
      transition: var(--media-menu-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out,
        left .2s ease-in-out,
        min-width .2s ease-in-out,
        min-height .2s ease-in-out
      ) !important;
      
      visibility: var(--media-menu-visibility, visible);
      opacity: var(--media-menu-opacity, 1);
      max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
      transform: var(--media-menu-transform-in, translateY(0) scale(1));
      flex-direction: column;
      
      min-height: 0;
      position: relative;
      bottom: var(--_menu-bottom);
      box-sizing: border-box;
    }

    :host([hidden]) {
      transition: var(--media-menu-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-menu-hidden-visibility, hidden);
      opacity: var(--media-menu-hidden-opacity, 0);
      max-height: var(--media-menu-hidden-max-height,
        var(--media-menu-max-height, var(--_menu-max-height, 300px)));
      transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }

    :host([slot="submenu"]) {
      background: none;
      width: 100%;
      min-height: 100%;
      position: absolute;
      bottom: 0;
      right: -100%;
    }

    #container {
      display: flex;
      flex-direction: column;
      min-height: 0;
      transition: transform .2s ease-out;
      transform: translate(0, 0);
    }

    #container.has-expanded {
      transition: transform .2s ease-in;
      transform: translate(-100%, 0);
    }

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      outline: inherit;
      display: inline-flex;
      align-items: center;
    }

    slot[name="header"][hidden] {
      display: none;
    }

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .7em;
      border-bottom: 1px solid rgb(255 255 255 / .25);
      cursor: default;
    }

    slot[name="header"] > button[part~="back"],
    slot[name="header"]::slotted(button[part~="back"]) {
      cursor: pointer;
    }

    svg[part~="back"] {
      height: var(--media-menu-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
      margin-right: .5ch;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap);
      flex-direction: var(--media-menu-flex-direction, column);
      overflow: var(--media-menu-overflow, hidden auto);
      display: flex;
      min-height: 0;
    }

    :host([role="menu"]) slot:not([name]) {
      padding-block: .4em;
    }

    slot:not([name])::slotted([role="menu"]) {
      background: none;
    }

    media-chrome-menu-item > span {
      margin-right: .5ch;
      max-width: var(--media-menu-item-max-width);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  </style>
  <style id="layout-row" media="width:0">

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .5em;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap, .25em);
      flex-direction: var(--media-menu-flex-direction, row);
      padding-inline: .5em;
    }

    media-chrome-menu-item {
      padding: .3em .5em;
    }

    media-chrome-menu-item[aria-checked="true"] {
      background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
    }

    
    media-chrome-menu-item::part(checked-indicator) {
      display: var(--media-menu-item-checked-indicator-display, none);
    }
  </style>
  <div id="container">
    <slot name="header" hidden>
      <button part="back button" aria-label="Back to previous menu">
        <slot name="back-icon">
          <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
            <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
          </svg>
        </slot>
        <slot name="title"></slot>
      </button>
    </slot>
    <slot></slot>
  </div>
  <slot name="checked-indicator" hidden></slot>
`;var iD={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"},iB=class extends tW.HTMLElement{constructor(){super(),ix(this,C),ix(this,R),ix(this,B),ix(this,P),ix(this,W),ix(this,Z),ix(this,$),ix(this,q),ix(this,G),ix(this,z),ix(this,J),ix(this,ee),ix(this,ei),ix(this,en),ix(this,eo),ix(this,el),ix(this,eh),ix(this,y,null),ix(this,T,null),ix(this,w,null),ix(this,S,new Set),ix(this,I,void 0),ix(this,x,!1),ix(this,L,null),ix(this,_,()=>{let e=iI(this,S),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));iL(this,S,t)}),ix(this,U,()=>{iC(this,Z,K).call(this),iC(this,$,Y).call(this,!1)}),ix(this,V,()=>{iC(this,Z,K).call(this)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),iL(this,I,new MutationObserver(iI(this,_))),iI(this,I).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[iD.DISABLED,iD.HIDDEN,iD.STYLE,iD.ANCHOR,tv.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":iC(this,C,M).call(this,e);break;case"invoke":iC(this,B,N).call(this,e);break;case"click":iC(this,q,F).call(this,e);break;case"toggle":iC(this,z,Q).call(this,e);break;case"focusout":iC(this,ee,et).call(this,e);break;case"keydown":iC(this,ei,ea).call(this,e)}}connectedCallback(){var e,t;iL(this,L,tI(this.shadowRoot,":host")),iC(this,R,D).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),iL(this,y,tA(this)),null==(t=null==(e=iI(this,y))?void 0:e.associateElement)||t.call(e,this),this.hidden||(iA(iP(this),iI(this,U)),iA(this,iI(this,V)))}disconnectedCallback(){var e,t;iy(iP(this),iI(this,U)),iy(this,iI(this,V)),this.disable(),null==(t=null==(e=iI(this,y))?void 0:e.unassociateElement)||t.call(e,this),iL(this,y,null)}attributeChangedCallback(e,t,i){var a,n,r,o;e===iD.HIDDEN&&i!==t?(iI(this,x)||iL(this,x,!0),this.hidden?iC(this,W,H).call(this):iC(this,P,O).call(this),this.dispatchEvent(new iw({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===tv.MEDIA_CONTROLLER?(t&&(null==(n=null==(a=iI(this,y))?void 0:a.unassociateElement)||n.call(a,this),iL(this,y,null)),i&&this.isConnected&&(iL(this,y,tA(this)),null==(o=null==(r=iI(this,y))?void 0:r.associateElement)||o.call(r,this))):e===iD.DISABLED&&i!==t?null==i?this.enable():this.disable():e===iD.STYLE&&i!==t&&iC(this,R,D).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=tw(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(iN)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&iC(this,eh,eu).call(this,t)}focus(){if(iL(this,T,function e(t=document){var i;let a=null==t?void 0:t.activeElement;return a?null!=(i=e(a.shadowRoot))?i:a:null}()),this.items.length){iC(this,el,ed).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=iC(this,en,er).call(this,e);i&&(iC(this,eh,eu).call(this,i,"checkbox"===i.type),iI(this,w)&&!this.hidden&&(null==(t=iI(this,T))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,n=this.items,r=null!=(i=null!=(t=iC(this,en,er).call(this,e))?t:iC(this,eo,es).call(this))?i:n[0],o=Math.max(0,n.indexOf(r));"ArrowDown"===a?o++:"ArrowUp"===a?o--:"Home"===e.key?o=0:"End"===e.key&&(o=n.length-1),o<0&&(o=n.length-1),o>n.length-1&&(o=0),iC(this,el,ed).call(this,n[o]),n[o].focus()}};function iN(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function iP(e){var t;return null!=(t=e.getAttribute("bounds")?tT(e,`#${e.getAttribute("bounds")}`):tk(e)||e.parentElement)?t:e}y=new WeakMap,T=new WeakMap,w=new WeakMap,S=new WeakMap,I=new WeakMap,x=new WeakMap,L=new WeakMap,C=new WeakSet,M=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===t.assignedNodes().length),t.name||iI(this,_).call(this)},_=new WeakMap,R=new WeakSet,D=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},B=new WeakSet,N=function(e){iL(this,w,e.relatedTarget),ty(this,e.relatedTarget)||(this.hidden=!this.hidden)},P=new WeakSet,O=function(){var e;null==(e=iI(this,w))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),iA(iP(this),iI(this,U)),iA(this,iI(this,V))},W=new WeakSet,H=function(){var e;null==(e=iI(this,w))||e.setAttribute("aria-expanded","false"),iy(iP(this),iI(this,U)),iy(this,iI(this,V))},U=new WeakMap,V=new WeakMap,Z=new WeakSet,K=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:n}=function({anchor:e,floating:t},i){let a,n="x"==(["top","bottom"].includes(ib(i))?"y":"x")?"y":"x",r="y"===n?"height":"width",o=ib(i),s=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[r]/2-t[r]/2;switch(o){case"top":a={x:s,y:e.y-t.height};break;case"bottom":a={x:s,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[n]-=d;break;case"end":a[n]+=d}return a}(function({anchor:e,floating:t}){return{anchor:function(e,t){var i;let a=e.getBoundingClientRect(),n=null!=(i=null==t?void 0:t.getBoundingClientRect())?i:{x:0,y:0};return{x:a.x-n.x,y:a.y-n.y,width:a.width,height:a.height}}(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:n}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=iP(this).getBoundingClientRect(),n=a.width-t-e,r=a.height-i-this.offsetHeight,{style:o}=iI(this,L);o.setProperty("position","absolute"),o.setProperty("right",`${Math.max(0,n)}px`),o.setProperty("--_menu-bottom",`${r}px`);let s=getComputedStyle(this),l=o.getPropertyValue("--_menu-bottom")===s.bottom?r:parseFloat(s.bottom),d=a.height-l-parseFloat(s.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},$=new WeakSet,Y=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=iI(this,L);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),iC(this,Z,K).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),iC(this,Z,K).call(this);a.removeProperty("--media-menu-transition-in")},q=new WeakSet,F=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(iI(this,G,j))){null==(t=iI(this,T))||t.focus(),this.hidden=!0;return}let i=iC(this,en,er).call(this,e);!i||i.hasAttribute("disabled")||(iC(this,el,ed).call(this,i),this.handleSelect(e))},G=new WeakSet,j=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},z=new WeakSet,Q=function(e){if(e.target===this)return;iC(this,J,X).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new iT({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);iC(this,$,Y).call(this,!0)},J=new WeakSet,X=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},ee=new WeakSet,et=function(e){var t;ty(this,e.relatedTarget)||(iI(this,x)&&(null==(t=iI(this,T))||t.focus()),iI(this,w)&&iI(this,w)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},ei=new WeakSet,ea=function(e){var t,i,a,n,r;let{key:o,ctrlKey:s,altKey:l,metaKey:d}=e;if(!s&&!l&&!d&&this.keysUsed.includes(o))if(e.preventDefault(),e.stopPropagation(),"Tab"===o){if(iI(this,x)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(n=null==(a=this.nextElementSibling)?void 0:a.focus)||n.call(a),this.blur()}else"Escape"===o?(null==(r=iI(this,T))||r.focus(),iI(this,x)&&(this.hidden=!0)):"Enter"===o||" "===o?this.handleSelect(e):this.handleMove(e)},en=new WeakSet,er=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},eo=new WeakSet,es=function(){return this.items.find(e=>0===e.tabIndex)},el=new WeakSet,ed=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},eh=new WeakSet,eu=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},iB.template=iR,tW.customElements.get("media-chrome-menu")||tW.customElements.define("media-chrome-menu",iB);var iO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iW=(e,t,i)=>(iO(e,t,"read from private field"),i?i.call(e):t.get(e)),iH=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iU=(e,t,i,a)=>(iO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),iV=(e,t,i)=>(iO(e,t,"access private method"),i),iZ=tH.createElement("template");iZ.innerHTML=`
  <style>
    :host {
      transition: var(--media-menu-item-transition,
        background .15s linear,
        opacity .2s ease-in-out
      );
      outline: var(--media-menu-item-outline, 0);
      outline-offset: var(--media-menu-item-outline-offset, -1px);
      cursor: pointer;
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-self: stretch;
      white-space: nowrap;
      white-space-collapse: collapse;
      text-wrap: nowrap;
      padding: .4em .8em .4em 1em;
    }

    :host(:focus-visible) {
      box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      outline: var(--media-menu-item-hover-outline, 0);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host(:hover) {
      cursor: pointer;
      background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
      outline: var(--media-menu-item-hover-outline);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host([aria-checked="true"]) {
      background: var(--media-menu-item-checked-background);
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      pointer-events: none;
      color: rgba(255, 255, 255, .3);
    }

    slot:not([name]) {
      width: 100%;
    }

    slot:not([name="submenu"]) {
      display: inline-flex;
      align-items: center;
      transition: inherit;
      opacity: var(--media-menu-item-opacity, 1);
    }

    slot[name="description"] {
      justify-content: end;
    }

    slot[name="description"] > span {
      display: inline-block;
      margin-inline: 1em .2em;
      max-width: var(--media-menu-item-description-max-width, 100px);
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .8em;
      font-weight: 400;
      text-align: right;
      position: relative;
      top: .04em;
    }

    slot[name="checked-indicator"] {
      display: none;
    }

    :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
      display: var(--media-menu-item-checked-indicator-display, inline-block);
    }

    
    svg, img, ::slotted(svg), ::slotted(img) {
      height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
    }

    
    [part~="indicator"],
    ::slotted([part~="indicator"]) {
      fill: var(--media-menu-item-indicator-fill,
        var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
      height: var(--media-menu-item-indicator-height, 1.25em);
      margin-right: .5ch;
    }

    [part~="checked-indicator"] {
      visibility: hidden;
    }

    :host([aria-checked="true"]) [part~="checked-indicator"] {
      visibility: visible;
    }
  </style>
  <slot name="checked-indicator">
    <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
      <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
    </svg>
  </slot>
  <slot name="prefix"></slot>
  <slot></slot>
  <slot name="description"></slot>
  <slot name="suffix"></slot>
  <slot name="submenu"></slot>
`;var iK={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"},i$=class extends tW.HTMLElement{constructor(){super(),iH(this,ep),iH(this,eb),iH(this,eE),iH(this,eA),iH(this,eT),iH(this,eS),iH(this,ec,!1),iH(this,em,void 0),iH(this,ek,()=>{var e,t;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],n=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,r=tH.createElement("span");r.textContent=null!=n?n:"",i.replaceChildren(r)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0))),this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[iK.TYPE,iK.DISABLED,iK.CHECKED,iK.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),iY(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":iV(this,ep,ev).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":iV(this,eT,ew).call(this,e);break;case"keyup":iV(this,eA,ey).call(this,e)}}attributeChangedCallback(e,t,i){e===iK.CHECKED&&iY(this)&&!iW(this,ec)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===iK.TYPE&&i!==t?this.role="menuitem"+i:e===iK.DISABLED&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(iK.DISABLED)||this.enable(),this.role="menuitem"+this.type,iU(this,em,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),iV(this,eS,eI).call(this)}disconnectedCallback(){this.disable(),iV(this,eS,eI).call(this),iU(this,em,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=tw(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(iK.TYPE))?e:""}set type(e){this.setAttribute(iK.TYPE,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(iK.VALUE))?e:this.text}set value(e){this.setAttribute(iK.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(iY(this))return"true"===this.getAttribute("aria-checked")}set checked(e){iY(this)&&(iU(this,ec,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!iY(this)&&this.invokeTargetElement&&ty(this,e.target)&&this.invokeTargetElement.dispatchEvent(new iT({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}};function iY(e){return"radio"===e.type||"checkbox"===e.type}ec=new WeakMap,em=new WeakMap,ep=new WeakSet,ev=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?iV(this,eb,eg).call(this):iV(this,eE,ef).call(this))},eb=new WeakSet,eg=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",iW(this,ek)),this.submenuElement.addEventListener("addmenuitem",iW(this,ek)),this.submenuElement.addEventListener("removemenuitem",iW(this,ek)),iW(this,ek).call(this)},eE=new WeakSet,ef=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",iW(this,ek)),this.submenuElement.removeEventListener("addmenuitem",iW(this,ek)),this.submenuElement.removeEventListener("removemenuitem",iW(this,ek)),iW(this,ek).call(this)},ek=new WeakMap,eA=new WeakSet,ey=function(e){let{key:t}=e;if(!this.keysUsed.includes(t))return void this.removeEventListener("keyup",iV(this,eA,ey));this.handleClick(e)},eT=new WeakSet,ew=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a))return void this.removeEventListener("keyup",iV(this,eA,ey));this.addEventListener("keyup",iV(this,eA,ey),{once:!0})},eS=new WeakSet,eI=function(){var e;let t=null==(e=iW(this,em))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},i$.template=iZ,tW.customElements.get("media-chrome-menu-item")||tW.customElements.define("media-chrome-menu-item",i$);var iq=tH.createElement("template");iq.innerHTML=iB.template.innerHTML+`
  <style>
    :host {
      background: var(--media-settings-menu-background,
        var(--media-menu-background,
        var(--media-control-background,
        var(--media-secondary-color, rgb(20 20 30 / .8)))));
      min-width: var(--media-settings-menu-min-width, 170px);
      border-radius: 2px 2px 0 0;
      overflow: hidden;
    }

    :host([role="menu"]) {
      
      justify-content: end;
    }

    slot:not([name]) {
      justify-content: var(--media-settings-menu-justify-content);
      flex-direction: var(--media-settings-menu-flex-direction, column);
      overflow: visible;
    }

    #container.has-expanded {
      --media-settings-menu-item-opacity: 0;
    }
  </style>
`;var iF=class extends iB{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:tk(this).querySelector("media-settings-menu-button")}};iF.template=iq,tW.customElements.get("media-settings-menu")||tW.customElements.define("media-settings-menu",iF);var iG=tH.createElement("template");iG.innerHTML=i$.template.innerHTML+`
  <style>
    slot:not([name="submenu"]) {
      opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
    }

    :host([aria-expanded="true"]:hover) {
      background: transparent;
    }
  </style>
`,(null==(ex=iG.content)?void 0:ex.querySelector)&&(iG.content.querySelector('slot[name="suffix"]').innerHTML=`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `);var ij=class extends i${};ij.template=iG,tW.customElements.get("media-settings-menu-item")||tW.customElements.define("media-settings-menu-item",ij);var iz=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iQ=(e,t,i)=>(iz(e,t,"read from private field"),i?i.call(e):t.get(e)),iJ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iX=(e,t,i,a)=>(iz(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),i0={TOOLTIP_PLACEMENT:"tooltipplacement"},i1=tH.createElement("template");i1.innerHTML=`
<style>
  :host {
    position: relative;
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }

  media-tooltip {
    
    max-width: 0;
    overflow-x: clip;
    opacity: 0;
    transition: opacity .3s, max-width 0s 9s;
  }

  :host(:hover) media-tooltip,
  :host(:focus-visible) media-tooltip {
    max-width: 100vw;
    opacity: 1;
    transition: opacity .3s;
  }

  :host([notooltip]) slot[name="tooltip"] {
    display: none;
  }
</style>

<slot name="tooltip">
  <media-tooltip part="tooltip" aria-hidden="true">
    <slot name="tooltip-content"></slot>
  </media-tooltip>
</slot>
`;var i2=class extends tW.HTMLElement{constructor(e={}){var t;if(super(),iJ(this,eD),iJ(this,eL,void 0),this.preventClick=!1,this.tooltipEl=null,this.tooltipContent="",iJ(this,eC,e=>{this.preventClick||this.handleClick(e),setTimeout(iQ(this,eM),0)}),iJ(this,eM,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),iJ(this,e_,e=>{let{key:t}=e;if(!this.keysUsed.includes(t))return void this.removeEventListener("keyup",iQ(this,e_));this.preventClick||this.handleClick(e)}),iJ(this,eR,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a))return void this.removeEventListener("keyup",iQ(this,e_));this.addEventListener("keyup",iQ(this,e_),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});let i=i1.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=tH.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),e.tooltipContent&&(i.querySelector('slot[name="tooltip-content"]').innerHTML=null!=(t=e.tooltipContent)?t:"",this.tooltipContent=e.tooltipContent),this.nativeEl.appendChild(a.content.cloneNode(!0)),this.shadowRoot.appendChild(i)}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",i0.TOOLTIP_PLACEMENT,tv.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",iQ(this,eC)),this.addEventListener("keydown",iQ(this,eR)),this.tabIndex=0}disable(){this.removeEventListener("click",iQ(this,eC)),this.removeEventListener("keydown",iQ(this,eR)),this.removeEventListener("keyup",iQ(this,e_)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,n,r,o,s;e===tv.MEDIA_CONTROLLER?(t&&(null==(n=null==(a=iQ(this,eL))?void 0:a.unassociateElement)||n.call(a,this),iX(this,eL,null)),i&&this.isConnected&&(iX(this,eL,null==(r=this.getRootNode())?void 0:r.getElementById(i)),null==(s=null==(o=iQ(this,eL))?void 0:o.associateElement)||s.call(o,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===i0.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t&&(this.tooltipEl.placement=i),iQ(this,eM).call(this)}connectedCallback(){var e,t,i;let{style:a}=tS(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let n=this.getAttribute(tv.MEDIA_CONTROLLER);n&&(iX(this,eL,null==(e=this.getRootNode())?void 0:e.getElementById(n)),null==(i=null==(t=iQ(this,eL))?void 0:t.associateElement)||i.call(t,this)),tW.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=eD,t=eB,iz(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=iQ(this,eL))?void 0:e.unassociateElement)||t.call(e,this),iX(this,eL,null),this.removeEventListener("mouseenter",iQ(this,eM)),this.removeEventListener("focus",iQ(this,eM)),this.removeEventListener("click",iQ(this,eC))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return tC(this,i0.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){tM(this,i0.TOOLTIP_PLACEMENT,e)}handleClick(e){}};eL=new WeakMap,eC=new WeakMap,eM=new WeakMap,e_=new WeakMap,eR=new WeakMap,eD=new WeakSet,eB=function(){this.addEventListener("mouseenter",iQ(this,eM)),this.addEventListener("focus",iQ(this,eM)),this.addEventListener("click",iQ(this,eC));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},tW.customElements.get("media-chrome-button")||tW.customElements.define("media-chrome-button",i2);var i5=class extends i2{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=tw(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new iT({relatedTarget:this}))}};tW.customElements.get("media-chrome-menu-button")||tW.customElements.define("media-chrome-menu-button",i5);var i4={AUDIO_TRACK_MENU:"Audio",CAPTIONS:"Captions",PLAYBACK_RATE:"Playback rate",RENDITIONS:"Quality",SETTINGS:"Settings"},i3={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:e=1}={})=>`current playback rate ${e}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading",SETTINGS:()=>"settings",AUDIO_TRACKS:()=>"audio tracks",QUALITY:()=>"quality"};({...i3,PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",ENTER_AIRPLAY:()=>"start airplay",EXIT_AIRPLAY:()=>"stop airplay",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:e=30}={})=>`seek forward ${e} seconds`,SEEK_BACK_N_SECS:({seekOffset:e=30}={})=>`seek back ${e} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"});var i7=tH.createElement("template");i7.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  </slot>
`;var i6=class extends i5{static get observedAttributes(){return[...super.observedAttributes,"target"]}constructor(){super({slotTemplate:i7,tooltipContent:i4.SETTINGS})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",i3.SETTINGS())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:tk(this).querySelector("media-settings-menu")}};tW.customElements.get("media-settings-menu-button")||tW.customElements.define("media-settings-menu-button",i6);var i8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},i9=(e,t,i)=>(i8(e,t,"read from private field"),i?i.call(e):t.get(e)),ae=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},at=(e,t,i,a)=>(i8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ai=(e,t,i)=>(i8(e,t,"access private method"),i),aa=class extends iB{constructor(){super(...arguments),ae(this,eO),ae(this,eH),ae(this,eN,[]),ae(this,eP,void 0)}static get observedAttributes(){return[...super.observedAttributes,tg.MEDIA_AUDIO_TRACK_LIST,tg.MEDIA_AUDIO_TRACK_ENABLED,tg.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===tg.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===tg.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;at(this,eN,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(t2)),ai(this,eO,eW).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ai(this,eH,eU))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ai(this,eH,eU))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=tk(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return i9(this,eN)}set mediaAudioTrackList(e){at(this,eN,e),ai(this,eO,eW).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=tC(this,tg.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){tM(this,tg.MEDIA_AUDIO_TRACK_ENABLED,e)}};eN=new WeakMap,eP=new WeakMap,eO=new WeakSet,eW=function(){if(i9(this,eP)===JSON.stringify(this.mediaAudioTrackList))return;at(this,eP,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=iM({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(i_(this,"checked-indicator")),this.defaultSlot.append(e)}},eH=new WeakSet,eU=function(){if(null==this.value)return;let e=new tW.CustomEvent(tp.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},tW.customElements.get("media-audio-track-menu")||tW.customElements.define("media-audio-track-menu",aa);var an=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,ar=tH.createElement("template");ar.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${an}</slot>
`;var ao=class extends i5{static get observedAttributes(){return[...super.observedAttributes,tg.MEDIA_AUDIO_TRACK_ENABLED,tg.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:ar,tooltipContent:i4.AUDIO_TRACK_MENU})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",i3.AUDIO_TRACKS())}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=tk(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=tC(this,tg.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){tM(this,tg.MEDIA_AUDIO_TRACK_ENABLED,e)}};tW.customElements.get("media-audio-track-menu-button")||tW.customElements.define("media-audio-track-menu-button",ao);var as=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=((e="")=>{let[t,i,a]=e.split(":"),n=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?tf.CAPTIONS:tf.SUBTITLES,language:i,label:n}})(e);return{...t,...i}}),al=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,ad=(e=[])=>Array.prototype.map.call(e,al).join(" "),ah=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},au=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ac=(e,t,i)=>(ah(e,t,"access private method"),i),am=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`,ap=tH.createElement("template");ap.innerHTML=iB.template.innerHTML+`
  <slot name="captions-indicator" hidden>${am}</slot>`;var av=class extends iB{constructor(){super(...arguments),au(this,eZ),au(this,e$),au(this,eV,void 0)}static get observedAttributes(){return[...super.observedAttributes,tg.MEDIA_SUBTITLES_LIST,tg.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tg.MEDIA_SUBTITLES_LIST&&t!==i?ac(this,eZ,eK).call(this):e===tg.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ac(this,e$,eY))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ac(this,e$,eY))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:tk(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return ab(this,tg.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){ag(this,tg.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return ab(this,tg.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){ag(this,tg.MEDIA_SUBTITLES_SHOWING,e)}};eV=new WeakMap,eZ=new WeakSet,eK=function(){var e,t,i,a,n,r;if(ah(this,t=eV,"read from private field"),(i?i.call(this):t.get(this))===JSON.stringify(this.mediaSubtitlesList))return;a=eV,n=JSON.stringify(this.mediaSubtitlesList),ah(this,a,"write to private field"),r?r.call(this,n):a.set(this,n),this.defaultSlot.textContent="";let o=!this.value,s=iM({type:"radio",text:this.formatMenuItemText("Off"),value:"off",checked:o});for(let t of(s.prepend(i_(this,"checked-indicator")),this.defaultSlot.append(s),this.mediaSubtitlesList)){let i=iM({type:"radio",text:this.formatMenuItemText(t.label,t),value:al(t),checked:this.value==al(t)});i.prepend(i_(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(i_(this,"captions-indicator")),this.defaultSlot.append(i)}},e$=new WeakSet,eY=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(tg.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new tW.CustomEvent(tp.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new tW.CustomEvent(tp.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},av.template=ap;var ab=(e,t)=>{let i=e.getAttribute(t);return i?as(i):[]},ag=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=ad(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};tW.customElements.get("media-captions-menu")||tW.customElements.define("media-captions-menu",av);var aE=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,af=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,ak=tH.createElement("template");ak.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${aE}</slot>
    <slot name="off">${af}</slot>
  </slot>
`;var aA=e=>{e.setAttribute("aria-checked",(e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(tg.MEDIA_SUBTITLES_SHOWING)})(e).toString())},ay=class extends i5{constructor(e={}){super({slotTemplate:ak,tooltipContent:i4.CAPTIONS,...e}),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eq,void 0),((e,t,i,a)=>{if(!t.has(e))throw TypeError("Cannot write to private field");return a?a.call(e,i):t.set(e,i)})(this,eq,!1)}static get observedAttributes(){return[...super.observedAttributes,tg.MEDIA_SUBTITLES_LIST,tg.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",i3.CLOSED_CAPTIONS()),aA(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tg.MEDIA_SUBTITLES_SHOWING&&aA(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=tk(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return aT(this,tg.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){aw(this,tg.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return aT(this,tg.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){aw(this,tg.MEDIA_SUBTITLES_SHOWING,e)}};eq=new WeakMap;var aT=(e,t)=>{let i=e.getAttribute(t);return i?as(i):[]},aw=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=ad(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};tW.customElements.get("media-captions-menu-button")||tW.customElements.define("media-captions-menu-button",ay);var aS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aI=(e,t,i)=>(aS(e,t,"read from private field"),i?i.call(e):t.get(e)),ax=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aL=(e,t,i,a)=>(aS(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aC=class{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){ax(this,eQ),ax(this,eF,void 0),ax(this,eG,void 0),ax(this,ej,void 0),ax(this,ez,new Set),aL(this,eF,e),aL(this,eG,t),aL(this,ej,new Set(i))}[Symbol.iterator](){return aI(this,eQ,eJ).values()}get length(){return aI(this,eQ,eJ).size}get value(){var e;return null!=(e=[...aI(this,eQ,eJ)].join(" "))?e:""}set value(e){var t;e!==this.value&&(aL(this,ez,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...aI(this,eQ,eJ)][e]}values(){return aI(this,eQ,eJ).values()}forEach(e,t){aI(this,eQ,eJ).forEach(e,t)}add(...e){var t,i;e.forEach(e=>aI(this,ez).add(e)),(""!==this.value||(null==(t=aI(this,eF))?void 0:t.hasAttribute(`${aI(this,eG)}`)))&&(null==(i=aI(this,eF))||i.setAttribute(`${aI(this,eG)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>aI(this,ez).delete(e)),null==(t=aI(this,eF))||t.setAttribute(`${aI(this,eG)}`,`${this.value}`)}contains(e){return aI(this,eQ,eJ).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}};eF=new WeakMap,eG=new WeakMap,ej=new WeakMap,ez=new WeakMap,eQ=new WeakSet,eJ=function(){return aI(this,ez).size?aI(this,ez):aI(this,ej)};var aM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)},a_={RATES:"rates"},aR=[1,1.2,1.5,1.7,2],aD=tH.createElement("template");aD.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;var aB=class extends i2{constructor(e={}){super({slotTemplate:aD,tooltipContent:i4.PLAYBACK_RATE,...e}),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eX,new aC(this,a_.RATES,{defaultValue:aR})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,tg.MEDIA_PLAYBACK_RATE,a_.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===a_.RATES&&(aM(this,eX).value=i),e===tg.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",i3.PLAYBACK_RATE({playbackRate:t}))}}get rates(){return aM(this,eX)}set rates(e){e?Array.isArray(e)&&(aM(this,eX).value=e.join(" ")):aM(this,eX).value=""}get mediaPlaybackRate(){return tx(this,tg.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){tL(this,tg.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(this.rates.values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,n=new tW.CustomEvent(tp.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(n)}};eX=new WeakMap,tW.customElements.get("media-playback-rate-button")||tW.customElements.define("media-playback-rate-button",aB);var aN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aP=(e,t,i)=>(aN(e,t,"read from private field"),i?i.call(e):t.get(e)),aO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aW=(e,t,i)=>(aN(e,t,"access private method"),i),aH={RATES:"rates"},aU=class extends iB{constructor(){super(),aO(this,e1),aO(this,e5),aO(this,e0,new aC(this,aH.RATES,{defaultValue:aR})),aW(this,e1,e2).call(this)}static get observedAttributes(){return[...super.observedAttributes,tg.MEDIA_PLAYBACK_RATE,aH.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tg.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===aH.RATES&&t!=i&&(aP(this,e0).value=i,aW(this,e1,e2).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",aW(this,e5,e4))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",aW(this,e5,e4))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:tk(this).querySelector("media-playback-rate-menu-button")}get rates(){return aP(this,e0)}set rates(e){e?Array.isArray(e)&&(aP(this,e0).value=e.join(" ")):aP(this,e0).value="",aW(this,e1,e2).call(this)}get mediaPlaybackRate(){return tx(this,tg.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){tL(this,tg.MEDIA_PLAYBACK_RATE,e)}};e0=new WeakMap,e1=new WeakSet,e2=function(){for(let e of(this.defaultSlot.textContent="",this.rates)){let t=iM({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate==e});t.prepend(i_(this,"checked-indicator")),this.defaultSlot.append(t)}},e5=new WeakSet,e4=function(){if(!this.value)return;let e=new tW.CustomEvent(tp.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},tW.customElements.get("media-playback-rate-menu")||tW.customElements.define("media-playback-rate-menu",aU);var aV=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)},aZ={RATES:"rates"},aK=[1,1.2,1.5,1.7,2],a$=tH.createElement("template");a$.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
    
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon"></slot>
`;var aY=class extends i5{constructor(e={}){super({slotTemplate:a$,tooltipContent:i4.PLAYBACK_RATE,...e}),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,e3,new aC(this,aZ.RATES,{defaultValue:aK})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,tg.MEDIA_PLAYBACK_RATE,aZ.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===aZ.RATES&&(aV(this,e3).value=i),e===tg.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",i3.PLAYBACK_RATE({playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:tk(this).querySelector("media-playback-rate-menu")}get rates(){return aV(this,e3)}set rates(e){e?Array.isArray(e)&&(aV(this,e3).value=e.join(" ")):aV(this,e3).value=""}get mediaPlaybackRate(){return tx(this,tg.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){tL(this,tg.MEDIA_PLAYBACK_RATE,e)}};e3=new WeakMap,tW.customElements.get("media-playback-rate-menu-button")||tW.customElements.define("media-playback-rate-menu-button",aY);var aq=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aF=(e,t,i)=>(aq(e,t,"read from private field"),i?i.call(e):t.get(e)),aG=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aj=(e,t,i,a)=>(aq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),az=(e,t,i)=>(aq(e,t,"access private method"),i),aQ=class extends iB{constructor(){super(...arguments),aG(this,e8),aG(this,te),aG(this,e7,[]),aG(this,e6,{})}static get observedAttributes(){return[...super.observedAttributes,tg.MEDIA_RENDITION_LIST,tg.MEDIA_RENDITION_SELECTED,tg.MEDIA_RENDITION_UNAVAILABLE,tg.MEDIA_HEIGHT]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===tg.MEDIA_RENDITION_SELECTED&&t!==i)this.value=null!=i?i:"auto";else if(e===tg.MEDIA_RENDITION_LIST&&t!==i)aj(this,e7,null==i?void 0:i.split(/\s+/).map(t1)),az(this,e8,e9).call(this);else e===tg.MEDIA_HEIGHT&&t!==i&&az(this,e8,e9).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",az(this,te,tt))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",az(this,te,tt))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:tk(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return aF(this,e7)}set mediaRenditionList(e){aj(this,e7,e),az(this,e8,e9).call(this)}get mediaRenditionSelected(){return tC(this,tg.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){tM(this,tg.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return tx(this,tg.MEDIA_HEIGHT)}set mediaHeight(e){tL(this,tg.MEDIA_HEIGHT,e)}};e7=new WeakMap,e6=new WeakMap,e8=new WeakSet,e9=function(){if(aF(this,e6).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&aF(this,e6).mediaHeight===this.mediaHeight)return;aF(this,e6).mediaRenditionList=JSON.stringify(this.mediaRenditionList),aF(this,e6).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height);for(let t of e)t.selected=t.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";let t=!this.mediaRenditionSelected;for(let i of e){let e=iM({type:"radio",text:this.formatMenuItemText(`${Math.min(i.width,i.height)}p`,i),value:`${i.id}`,checked:i.selected&&!t});e.prepend(i_(this,"checked-indicator")),this.defaultSlot.append(e)}let i=iM({type:"radio",text:this.formatMenuItemText("Auto"),value:"auto",checked:t}),a=this.mediaHeight>0?`Auto (${this.mediaHeight}p)`:"Auto";i.dataset.description=a,i.prepend(i_(this,"checked-indicator")),this.defaultSlot.append(i)},te=new WeakSet,tt=function(){if(null==this.value)return;let e=new tW.CustomEvent(tp.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},tW.customElements.get("media-rendition-menu")||tW.customElements.define("media-rendition-menu",aQ);var aJ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,aX=tH.createElement("template");aX.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${aJ}</slot>
`;var a0=class extends i5{static get observedAttributes(){return[...super.observedAttributes,tg.MEDIA_RENDITION_SELECTED,tg.MEDIA_RENDITION_UNAVAILABLE,tg.MEDIA_HEIGHT]}constructor(){super({slotTemplate:aX,tooltipContent:i4.RENDITIONS})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",i3.QUALITY())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:tk(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return tC(this,tg.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){tM(this,tg.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return tx(this,tg.MEDIA_HEIGHT)}set mediaHeight(e){tL(this,tg.MEDIA_HEIGHT,e)}};tW.customElements.get("media-rendition-menu-button")||tW.customElements.define("media-rendition-menu-button",a0);var a1=tm.createElement("template");"innerHTML"in a1&&(a1.innerHTML=to);var a2=class extends ip{};a2.template=null==(ta=null==(ti=a1.content)?void 0:ti.children)?void 0:ta[0],tc.customElements.get("media-theme-classic")||tc.customElements.define("media-theme-classic",a2)}}]);