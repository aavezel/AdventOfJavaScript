port module Main exposing (..)

import Browser
import Html exposing (Html, input, span, button, label, strong, div, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onCheck, onInput)
import Random
import Svg exposing (svg, path)
import Svg.Attributes exposing (viewBox, fill, d)
import Platform.Cmd exposing (Cmd)
import Platform.Cmd exposing (Cmd)
import Process
import Task


-- MODEL


type alias Model =
  { password: String
  , length: Int
  , symbols: Bool
  , numbers: Bool
  , lowercase: Bool
  , uppercase: Bool
  , similar: Bool
  , isCopied: Bool
  }


init : () -> (Model, Cmd Msg)
init _ =
  let
    initModel =
      { password = ""
        , length = 12
        , symbols = False
        , numbers =  True
        , lowercase = True
        , uppercase =  False
        , similar =  False
        , isCopied = False
        }
  in
    (initModel, makePassword initModel)


-- PASSWORD GENERATION
unionStringCondition: Bool -> String -> String -> String
unionStringCondition condition add initValue
  = if condition then
      initValue ++ add
    else
      initValue

clearI1L: Model -> String -> String
clearI1L model value
  = if model.lowercase then
      value
      |> String.replace "l" "i"
      |> String.replace "t" "i"
      |> String.replace "1" "i"
      |> String.replace "I" "i"
      |> String.replace "L" "i"
    else
      if model.numbers then
        value
        |> String.replace "I" "1"
        |> String.replace "L" "1"
      else
        if model.uppercase then
          String.replace "L" "I" value
        else
          value

clearO0o: Model -> String -> String
clearO0o model value
  = if model.numbers then
      value
      |> String.replace "o" "0"
      |> String.replace "O" "0"
    else
      if model.lowercase then
        value
        |> String.replace "O" "o"
      else
        value

clearSimilar: Model -> String -> String
clearSimilar model value
  = if not model.similar then
      value
        |> clearI1L model
        |> clearO0o model
    else
      value


getPasswordChars : Model -> String
getPasswordChars model
  = ""
  |> unionStringCondition model.lowercase "abcdefghijklmnopqrstuvwxyz"
  |> unionStringCondition model.numbers "1234567890"
  |> unionStringCondition model.uppercase "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  |> unionStringCondition model.symbols "!@#$%^&*()-+/=~`/.\\|,?'\";:[]{}"
  |> clearSimilar model

generateChar : List Char -> Random.Generator Char
generateChar chars
  = case chars of
     [] ->
       Random.uniform ' ' []
     x::xs ->
       Random.uniform x xs

makePassword : Model -> Cmd Msg
makePassword model
  = let
      passwordGenerator
        = getPasswordChars model
        |> String.toList
        |> generateChar
        |> Random.list model.length
        |> Random.map String.fromList
    in
      Random.generate SetPassword passwordGenerator


-- UPDATE

waitFlushIsCopied: Cmd Msg
waitFlushIsCopied =
  Process.sleep 1000
  |> Task.perform (\_ -> SetIsCopied False)

port callCopy : String -> Cmd msg
copy: String -> Cmd Msg
copy password =
  callCopy password


type Msg
  = SetLength String
  | SetPassword String
  | SetSymbols Bool
  | SetNumbers Bool
  | SetLowercaseCharacters Bool
  | SetUppercaseCharacters Bool
  | SetSimilarCharacters Bool
  | SetIsCopied Bool

update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
    SetPassword password ->
      ({model | password = password}, Cmd.none)
    SetLength strLength ->
      let
        newLength
          = strLength
          |> String.toInt
          |> Maybe.withDefault 0
        newModel = { model | length = newLength }
      in
        ( newModel, makePassword newModel )
    SetSymbols boolChecked ->
      let
        newModel = { model | symbols = boolChecked }
      in
        ( newModel, makePassword newModel )
    SetNumbers boolChecked ->
      let
        newModel = { model | numbers = boolChecked }
      in
        ( newModel, makePassword newModel )
    SetLowercaseCharacters boolChecked ->
      let
        newModel = { model | lowercase = boolChecked }
      in
        ( newModel, makePassword newModel )
    SetUppercaseCharacters boolChecked ->
      let
        newModel = { model | uppercase = boolChecked }
      in
        ( newModel, makePassword newModel )
    SetSimilarCharacters boolChecked ->
      let
        newModel = { model | similar = boolChecked }
      in
        ( newModel, makePassword newModel )
    SetIsCopied isCopied ->
      let
        newModel = { model | isCopied = isCopied }
        command = if isCopied then Cmd.batch [copy model.password, waitFlushIsCopied] else Cmd.none
      in
        ( newModel, command )



-- VIEW

stringFromBool : Bool -> String
stringFromBool value =
  if value then
    "true"
  else
    "false"

labelFor : String -> String -> String -> Html msg
labelFor forElement strongText normalText
  = label [for forElement]
      [ strong []
          [text strongText]
      , text normalText
      ]

lengthRange : Model -> Html Msg
lengthRange model =
  div [class "field"]
    [
      input [
        type_ "range",
        name "length",
        id "length",
        value (String.fromInt model.length),
        Html.Attributes.min "6",
        Html.Attributes.max "32",
        onInput SetLength
      ] []
      , span [id "lengthText"] [
          text (String.fromInt model.length)
        ]
      , text "characters"
    ]

checkboxField : String -> Bool -> String -> String -> (Bool -> Msg) -> Html Msg
checkboxField fieldName data text help msg
  = div [class "field"]
      [ input [
          type_ "checkbox",
          name fieldName,
          id fieldName,
          checked data,
          onCheck msg
        ][]
      , labelFor fieldName text help
      ]

passwordField: String -> Bool -> Html Msg
passwordField password isCopied =
  let
    copyButtonClass  = if isCopied then "copy copied" else "copy"
  in
    div [class "field"]
      [ input [
          type_ "text",
          name "password",
          id "password",
          value password,
          Html.Attributes.min "6",
          Html.Attributes.max "32",
          step "1",
          disabled True
        ][]
      , button [class copyButtonClass, onClick (SetIsCopied True)]
        [
          svg [
            Svg.Attributes.width "55",
            Svg.Attributes.height "55",
            viewBox "0 0 55 55",
            fill "currentColor"
          ][
            path [d "M37.3147 2.83081H20.6332C18.1514 2.83081 16.1332 4.85131 16.1332 7.33081V38.8308C16.1332 41.3126 18.1514 43.3308 20.6332 43.3308H43.1332C45.6149 43.3308 47.6332 41.3126 47.6332 38.8308V13.1493L37.3147 2.83081ZM43.1354 38.8308H20.6332V7.33081H34.1332V16.3308H43.1332L43.1354 38.8308Z"] []
            , path [d "M11.6332 11.8308H7.13318V47.8308C7.13318 50.3126 9.15143 52.3308 11.6332 52.3308H38.6332V47.8308H11.6332V11.8308Z"] []
          ]
          , span [] [text "Copied!"]
        ]
      ]


view : Model -> Html Msg
view model =
  div [class "wrapper"]
    [ passwordField model.password model.isCopied
      , lengthRange model
      , checkboxField "symbols" model.symbols "Include Symbols" "(@#$%)" SetSymbols
      , checkboxField "numbers" model.numbers "Include Numbers" "(1234)" SetNumbers
      , checkboxField "lowercase" model.lowercase "Include Lowercase Characters" "(abcd)" SetLowercaseCharacters
      , checkboxField "uppercase" model.uppercase "Include Uppercase Characters" "(ABCD)" SetUppercaseCharacters
      , checkboxField "similar" model.similar "Include Similar Characters" "(i, l, 1, L, o, 0, O)" SetSimilarCharacters
    ]


-- SUBSCRIPTIONS

subscriptions : Model -> Sub Msg
subscriptions _ =
  Sub.none



-- MAIN

main =
  Browser.element {
    init = init
    , subscriptions = subscriptions
    , update = update
    , view = view
  }