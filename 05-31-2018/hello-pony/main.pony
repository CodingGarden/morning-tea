// 2 "marker values"
primitive OpenedDoor 
primitive ClosedDoor

// An "enumeration" type
type DoorState is (OpenedDoor | ClosedDoor)

// A collection of functions
primitive BasicMath
  fun add(a: U64, b: U64): U64 =>
    a + b

  fun multiply(a: U64, b: U64): U64 =>
    a * b

actor Main
  new create(env: Env) =>
    let doorState : DoorState = OpenedDoor
    let isDoorOpen : Bool = match doorState
      | OpenedDoor => true 
      | ClosedDoor => false
    end
    env.out.print("Is door open? " + isDoorOpen.string())
    env.out.print("42 * 1 = " + BasicMath.multiply(42,1).string())