import { BigInt } from "@graphprotocol/graph-ts"
import {
  delta,
  Approval,
  ApprovalForAll,
  CollectionsPaused,
  CollectionsUnpaused,
  FungibleCollection,
  MinterAdded,
  MinterRemoved,
  NonFungibleCollection,
  OwnershipTransferred,
  Paused,
  PauserAdded,
  PauserRemoved,
  RelayHubChanged,
  Transfer,
  TransferBatch,
  TransferSingle,
  URI,
  Unpaused
} from "../generated/delta/delta"
import { Minter,Pauser,TransferItem,Item, Owner, ContractOwner} from "../generated/schema"

export function handleApproval(event: Approval): void {
  //Not useful
}

export function handleApprovalForAll(event: ApprovalForAll): void {
  //Not useful
}

export function handleCollectionsPaused(event: CollectionsPaused): void {
  //Not useful
}

export function handleCollectionsUnpaused(event: CollectionsUnpaused): void {
  //Not useful
}

export function handleFungibleCollection(event: FungibleCollection): void {
  //Was not used
}

export function handleMinterAdded(event: MinterAdded): void {
  let entity = Minter.load(event.params.account.toHex())
  if (entity == null) {
    entity = new Minter(event.params.account.toHex())
  }
  entity.active=true
  entity.save()

}

export function handleMinterRemoved(event: MinterRemoved): void {
  let entity = Minter.load(event.params.account.toHex())
  if (entity == null) {
    entity = new Minter(event.params.account.toHex())
  }
  entity.active=false
  entity.save()
}

export function handleNonFungibleCollection(
  event: NonFungibleCollection
): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let newowner = ContractOwner.load(event.params.newOwner.toHex())
  if (newowner == null) {
    newowner = new ContractOwner(event.params.newOwner.toHex())
  }
  if (event.params.previousOwner.toHex()!= '0x0000000000000000000000000000000000000000') {
    let oldowner = ContractOwner.load(event.params.previousOwner.toHex())
    if (oldowner == null) {
      oldowner = new ContractOwner(event.params.previousOwner.toHex())
      oldowner.active=false
      oldowner.save()
    }
  }

  newowner.active=true
  newowner.save()
}

export function handlePaused(event: Paused): void {
  //Not useful
}

export function handlePauserAdded(event: PauserAdded): void {
  let entity = Pauser.load(event.params.account.toHex())
  if (entity == null) {
    entity = new Pauser(event.params.account.toHex())
  }
  entity.active=true
  entity.save()
}

export function handlePauserRemoved(event: PauserRemoved): void {
  let entity = Pauser.load(event.params.account.toHex())
  if (entity == null) {
    entity = new Pauser(event.params.account.toHex())
  }
  entity.active=false
  entity.save()
}

export function handleRelayHubChanged(event: RelayHubChanged): void {
  //Was not used
}

export function handleTransfer(event: Transfer): void {
}

export function handleTransferBatch(event: TransferBatch): void {
  //No need to use it since Transfer event occures for every item of the batch
}

export function handleTransferSingle(event: TransferSingle): void {
  let item = Item.load(event.params._id.toString())
  if (item == null) {
    item = new Item(event.params._id.toString())
  }

  let oldowner = Owner.load(event.params._from.toHex())
  if (oldowner == null) {
    oldowner = new Owner(event.params._from.toHex())
    oldowner.save()
  }

  let newowner = Owner.load(event.params._to.toHex())
  if (newowner == null) {
    newowner = new Owner(event.params._to.toHex())
    newowner.save()
  }

  let transf = TransferItem.load(event.transaction.hash.toHex()+event.params._id.toString())
  if (transf == null) {
    transf = new TransferItem(event.transaction.hash.toHex()+event.params._id.toString())
  }
  item.owner=newowner.id
  item.save()

  transf.token=item.id
  transf.from=event.params._from.toHex()
  transf.to=event.params._to.toHex()
  transf.save()
}

export function handleURI(event: URI): void {
  let entity = Item.load(event.params._id.toString())
  if (entity == null) {
    entity = new Item(event.params._id.toString())
  }
  entity.value=event.params._value
  entity.save()
}

export function handleUnpaused(event: Unpaused): void {
  //Not useful
}
